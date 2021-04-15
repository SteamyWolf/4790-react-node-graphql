import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Card, CardActionArea, Typography, CardContent, List, ListItem, ListItemAvatar, Avatar, ListItemText, CardActions, IconButton, CardMedia } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { useQuery, gql } from '@apollo/client';
import MapGoogle from './MapGoogle';

const useStyles = makeStyles((theme) => ({
    locationsMain: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    card: {
        width: '300px',
        margin: '0 auto',
        marginTop: 30,
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




const Locations = () => {
    const classes = useStyles();
    // const [locations, setLocations] = useState([]);

    const { loading, error, data } = useQuery(ALL_LOCATIONS)

    if (loading) {
        console.log('Currently Loading', loading)
    }

    if (error) {
        console.log('error', error)
    }
    
    let locations = [];
    if (!loading) {
        locations = data.allLocations;
        console.log(locations)
        locations.map(location => {
            return {
                ...location,
                data: 'hi'
            }
        })
    }

    const onEditClick = () => {
        console.log('clicked onEdit')
    }


    return (
        <>
        {locations.length === 0 ?
            <div>Loading Data</div>
        : 
            <div className={classes.locationsMain}>
                {locations.map(location => {
                    return (
                        <Card className={classes.card} key={location.id}>
                            <CardActionArea>
                                <div>
                                    <MapGoogle googleMapURL={`https:////maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`} //&key=${process.env.REACT_APP_GOOGLE_KEY}
                                               location={location} 
                                               loadingElement={<div style={{ height: `100%` }} />}
                                               containerElement={<div style={{ height: `400px` }} />} 
                                               mapElement={<div style={{ height: `100%` }} />}
                                    />
                                </div>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" comppnent="h2">
                                        {location.name}
                                    </Typography>
                                    <Typography>
                                        {location.description}
                                    </Typography>
                                    {location.coordinates.map(coordinate => {
                                        return (
                                            <Typography variant="body2" color="textSecondary" component="div" key={coordinate.id}>
                                                <p>Longitude: {coordinate.longitude}</p>
                                                <p>Latitude: {coordinate.latitude}</p>
                                                <hr></hr>
                                            </Typography>
                                        )
                                    })}
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <IconButton className={classes.editIcon} onClick={() => onEditClick()}>
                                    <EditIcon />
                                </IconButton>
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