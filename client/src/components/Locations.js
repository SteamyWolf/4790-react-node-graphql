import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardActionArea, Typography, CardContent, CardActions, IconButton, CardMedia } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { useQuery, gql, useMutation } from '@apollo/client';
import MapGoogle from './MapGoogle';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    locationsMain: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    card: {
        width: '400px',
        margin: '30px 20px',
        position: 'relative'
    },
    cardContent: {
        position: 'relative'
    },
    editIcon: {
        zIndex: 1,
        position: 'absolute',
        top: 0,
        right: 0
    },
    avatar: {
        backgroundColor: 'white'
    },
    form: {
        margin: '0 auto',
        width: '200px'
    },
    buttonDiv: {
        width: '100%',
        marginTop: 10,
        textAlign: 'center'
    },
    textField: {
        width: '100%'
    },
    textFieldCenter: {
        display: 'flex',
        alignItems: 'center'
    },
    deleteIconDiv: {
        position: 'absolute',
        right: 10,
        bottom: 4,
        cursor: 'pointer'
    },
    actionArea: {
        position: 'relative'
    }
}));

const ALL_LOCATIONS = gql`
    query {
        allLocations {
            id
            name
            description
            coordinates {
              id
              longitude
              latitude
            }
          }
    }
`

const UPDATE_COORDINATE = gql`
    mutation updateCoordinate($id: Int!, $data: CoordinateCreateInput!) {
        updateCoordinate(id: $id, data: $data) {
            id
            latitude
            longitude
        }
    }
`

const DELETE_LOCATION = gql`
    mutation deleteLocation($id: Int!) {
        deleteLocation(id: $id) {
            id
            name
        }
    }
`

const DELETE_COORDINATE = gql`
    mutation deleteCoordinate($id: Int!) {
        deleteCoordinate(id: $id) {
            id
            latitude
            longitude
        }
    }
`



const Locations = () => {
    const classes = useStyles();
    const [locations, setLocations] = useState([]);
    const [updateCoor] = useMutation(UPDATE_COORDINATE);
    const [deleteLoc] = useMutation(DELETE_LOCATION);
    const [deleteCoord] = useMutation(DELETE_COORDINATE);

    const { loading, error, data } = useQuery(ALL_LOCATIONS)
    if (error) {
        console.log('error', error)
    }
    const locationsState = (bool) => {
        if (!bool) {
            let allLocationMapped = data.allLocations.map(location => {
                return { ...location, editing: false}
            })
            setLocations(allLocationMapped)
            console.log(locations)
        }
    }
    useEffect(() => {
        locationsState(loading);
    }, [loading])

    const onEditClick = (location) => {
        console.log(location)
        console.log('clicked onEdit')
        let foundLocation = locations.find(loc => loc.id === location.id);
        foundLocation.editing = !foundLocation.editing;
        let index = locations.findIndex(element => element.id === foundLocation.id)
        let newLocationData = [...locations];
        newLocationData.splice(index, 1, foundLocation);
        setLocations(newLocationData);
    }

    const saveButtonClick = (event, location) => {
        event.preventDefault();
        if (location.coordinates.length === 0) {
            console.log(event)
        }
        location.editing = false;
        const formData = new FormData(event.target)
        const formArray = [];
        for (let [key, value] of formData.entries()) {
            if (key === 'latitude') {
                let obj = { latitude: value }
                formArray.push(obj);
            } else if (key === 'longitude') {
                let obj = { longitude: value }
                formArray.push(obj)
            }
        }
        const newArray = [];
        for (let i = 0; i < formArray.length; i++) {
            let coorID = event.target[i].attributes[2].value
            newArray.push({...formArray[i], id: coorID})
        }

        const newLocation = {...location};
        const findingsArr = [];
        newLocation.coordinates.forEach(coor => {
            let finding = newArray.filter(obj => coor.id === parseInt(obj.id))
            let control = {...finding[0], ...finding[1]}
            findingsArr.push(control)
        })

        const organizedArr = findingsArr.map(obj => {
            return {...obj, id: parseInt(obj.id)}
        })
        console.log(organizedArr)
        organizedArr.forEach(coordinate => {
            updateCoor({variables: { id: coordinate.id, data: {longitude: coordinate.longitude, latitude: coordinate.latitude}}})
        })

        locationsState(false);

        const completedLocation = {...location, coordinates: organizedArr}
        let index = locations.findIndex(loc => loc.id === completedLocation.id)
        let newLocations = [...locations];
        newLocations.splice(index, 1, completedLocation);
        setLocations(newLocations);
    }

    const onDeleteLocation = (location) => {
        if (location.coordinates.length > 0) {
            let allCoordsDeleted = location.coordinates.map(coor => {
                return deleteCoord({variables: { id: coor.id }})
            })
            Promise.all(allCoordsDeleted).then(values => {
                deleteLoc({variables: { id: location.id }})
            }) 
        } else {
            deleteLoc({variables: { id: location.id }})
        }
        
        let index = locations.findIndex(loc => loc.id === location.id)
        let newLocations = [...locations];
        newLocations.splice(index, 1);
        setLocations(newLocations)
    }


    return (
        <>
        {locations.length === 0 ?
            <div>Loading Data...</div>
        : 
            <div className={classes.locationsMain}>
                {locations.map(location => {
                    return (
                        <Card className={classes.card} key={location.id}>
                            <CardActionArea>
                                <CardMedia>
                                    <MapGoogle googleMapURL={`https:////maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`} //AIzaSyCAqXZDHtWTZ3lk8QqdL0ri-RKQhuzMs6U
                                               location={location} 
                                               loadingElement={<div style={{ height: `100%` }} />}
                                               containerElement={<div style={{ height: `400px` }} />} 
                                               mapElement={<div style={{ height: `100%` }} />}
                                    />
                                </CardMedia>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" comppnent="h2">
                                        {location.name}
                                    </Typography>
                                    <Typography>
                                        {location.description}
                                    </Typography>
                                        <form onSubmit={(e) => saveButtonClick(e, location)}>
                                            {location.coordinates.length === 0 
                                                ? 
                                                    // <Typography variant="body2" color="textSecondary" component="div">
                                                    //     <div>Latitude: {!location.editing ? 1 : <input type="text" name="latitude" data={Math.round(Math.random() * 1000)} defaultValue={1} />}</div>
                                                    //     <div>Longitude: {!location.editing ? 1 : <input type="text" name="latitude" data={Math.round(Math.random() * 1000)} defaultValue={1} />}</div>
                                                    // </Typography> 
                                                    <p>You must add a coordinate to display the map correctly.{<br></br>} (In progress)</p>
                                                : 
                                                    location.coordinates.map(coordinate => {
                                                        return (
                                                            <Typography variant="body2" color="textSecondary" component="div" key={coordinate.id}>
                                                                <div>Latitude: { !location.editing ? coordinate.latitude : <input type="text" name="latitude" data={coordinate.id} defaultValue={coordinate.latitude} /> }</div>
                                                                <div>Longitude: {!location.editing ? coordinate.longitude : <input type="text" name="longitude" data={coordinate.id} defaultValue={coordinate.longitude} />}</div>
                                                                <hr></hr>
                                                            </Typography>
                                                        )
                                                    })
                                            }
                                            {location.editing 
                                                ?
                                                    <div>
                                                        <Button color="primary" variant="contained" type="submit">Save</Button>
                                                        <Button variant="contained" onClick={() => onEditClick(location)}>Cancel</Button>
                                                    </div>
                                                :
                                                    null
                                            }
                                        </form>
                                    {location.coordinates.length === 0 ? null : 
                                        <IconButton className={classes.editIcon} onClick={() => onEditClick(location)}>
                                            <EditIcon />
                                        </IconButton>
                                    }
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <div className={classes.deleteIconDiv}>
                                    <DeleteIcon onClick={() => onDeleteLocation(location)} />
                                </div>
                            </CardActions>
                        </Card>
                    )
                })}
            </div>
        }
        </>
    )
}

export default Locations;