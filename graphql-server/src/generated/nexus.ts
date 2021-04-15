/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CoordinateCreateInput: { // input type
    latitude: string; // String!
    longitude: string; // String!
  }
  LocationCreateInput: { // input type
    description?: string | null; // String
    name: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  Coordinate: { // root type
    id: number; // Int!
    latitude: string; // String!
    longitude: string; // String!
  }
  Location: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description?: string | null; // String
    id: number; // Int!
    name: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  Mutation: {};
  Query: {};
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Coordinate: { // field return type
    id: number; // Int!
    latitude: string; // String!
    location: NexusGenRootTypes['Location'] | null; // Location
    longitude: string; // String!
  }
  Location: { // field return type
    coordinates: NexusGenRootTypes['Coordinate'][]; // [Coordinate!]!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string | null; // String
    id: number; // Int!
    name: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  Mutation: { // field return type
    createCoordinate: NexusGenRootTypes['Coordinate'] | null; // Coordinate
    createLocation: NexusGenRootTypes['Location']; // Location!
    deleteCoordinate: NexusGenRootTypes['Coordinate'] | null; // Coordinate
    deleteLocation: NexusGenRootTypes['Location'] | null; // Location
    updateCoordinate: NexusGenRootTypes['Coordinate'] | null; // Coordinate
  }
  Query: { // field return type
    allCoordinates: NexusGenRootTypes['Coordinate'][]; // [Coordinate!]!
    allLocations: NexusGenRootTypes['Location'][]; // [Location!]!
    coordinateById: NexusGenRootTypes['Coordinate'] | null; // Coordinate
    locationById: NexusGenRootTypes['Location'] | null; // Location
  }
}

export interface NexusGenFieldTypeNames {
  Coordinate: { // field return type name
    id: 'Int'
    latitude: 'String'
    location: 'Location'
    longitude: 'String'
  }
  Location: { // field return type name
    coordinates: 'Coordinate'
    createdAt: 'DateTime'
    description: 'String'
    id: 'Int'
    name: 'String'
    updatedAt: 'DateTime'
  }
  Mutation: { // field return type name
    createCoordinate: 'Coordinate'
    createLocation: 'Location'
    deleteCoordinate: 'Coordinate'
    deleteLocation: 'Location'
    updateCoordinate: 'Coordinate'
  }
  Query: { // field return type name
    allCoordinates: 'Coordinate'
    allLocations: 'Location'
    coordinateById: 'Coordinate'
    locationById: 'Location'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createCoordinate: { // args
      data: NexusGenInputs['CoordinateCreateInput']; // CoordinateCreateInput!
      locationName: string; // String!
    }
    createLocation: { // args
      data: NexusGenInputs['LocationCreateInput']; // LocationCreateInput!
    }
    deleteCoordinate: { // args
      id: number; // Int!
    }
    deleteLocation: { // args
      id: number; // Int!
    }
    updateCoordinate: { // args
      data: NexusGenInputs['CoordinateCreateInput']; // CoordinateCreateInput!
      id: number; // Int!
    }
  }
  Query: {
    coordinateById: { // args
      id?: number | null; // Int
    }
    locationById: { // args
      id?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}