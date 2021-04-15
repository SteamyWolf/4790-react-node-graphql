import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Card, CardActionArea, Typography, CardContent, List, ListItem, ListItemAvatar, Avatar, ListItemText, CardActions, IconButton, CardMedia } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { useQuery, gql } from '@apollo/client';

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
              longitude
              latitude
            }
          }
    }
`

const Locations = () => {
    const classes = useStyles();


    const { loading, error, data } = useQuery(ALL_LOCATIONS)

    if (loading) {
        console.log('Currently Loading', loading)
    }

    if (error) {
        console.log('error', error)
    }

    const locationList = data.allLocations;
    console.log(locationList)

    const onEditClick = () => {
        console.log('clicked onEdit')
    }


    return (
        <>
            <div className={classes.locationsMain}>
                {locationList.map(location => {
                    return (
                        <Card className={classes.card} key={location.id}>
                            <CardActionArea>
                                <CardMedia />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" comppnent="h2">
                                        {location.name}
                                    </Typography>
                                    <Typography>
                                        {location.description}
                                    </Typography>
                                    {location.coordinates.map(coordinate => {
                                        return (
                                            <Typography variant="body2" color="textSecondary" component="div">
                                                <p>{coordinate.longitude}</p>
                                                <p>{coordinate.latitude}</p>
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
        </>
    )
}

export default Locations;