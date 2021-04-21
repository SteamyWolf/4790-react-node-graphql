# First Time Users Start Here:
This project contains different servers. For now, 3 of the servers will run locally on your machine and 1 is via heroku at: https://ip-address-app-wyatt.herokuapp.com.

All of the scripts to run this project are located in the package.json file located on the `root` level of the project.

# To start this project you will run in your terminal the following commands:
1. ## `npm install`
2. ## `npm run postinstall`
3. ## `npm run launch`
4. ## `npm run migrate`
5. ## `npm run seed`
6. ## `npm run start-dev`

After doing so, you will see a window automatically open up in your default browser with the url being: `localhost:3000/locations`. This is the react app running locally.
Another server running locally is `localhost:5050`. You will only see a 'Welcome' text displayed but this means it is working.
You may also open up another tab and type in: `localhost:4000` to see some example queries and mutations available via the GraphQL playground.

# Home Page:
On the home page you will see a simple input asking for you to type in an IP Address. After doing so, if you get an error it is because that IP Address does not have an associated **_provider_**. Try a different IP until you get one that works.
You will see that you can add it to your favorites with a star icon that fills up when selected as a favorite.

### 1st and 2nd GET Requests:
Called after a user searches for an IP Location:
```javascript
router.get('/:ip', async (req, res, next) => {
    let response = await fetch(`http://ip-api.com/json/${req.params.ip}`);
    let data = await response.json()
    res.json(data)
})
```
The above request takes in the ip typed in by the user as a request parameter and then performs another request to an api called: `ip-api.com`. This double request responds with data sent back to the client as JSON.
(This uses a package called: `node-fetch` which allows for fetching within a node application).

### 1st POST Request:
Called after a user clicks on the star icon to favorite an IP Address:
```javascript
router.post('/saveLocation', async (req, res, next) => {
    const location = new Location({
        ip: req.body.ip,
        country: req.body.country,
        city: req.body.city,
        region: req.body.region,
        timezone: req.body.timezone,
        organization: req.body.organization
    })
    let savedLocation = await location.save();
    res.json(savedLocation)
})
```
This saves the location into the `MongoDB` server using `Mongoose`.

# Favorites Page:
Navigate to the Favorites page to see a list of all of your favorite IP Addresses. You can hit the edit icon to edit the fields and delete them.

### 3rd GET Request:
Called when a user navigates to the Favorites page:
```javascript
router.get('/favorites', async (req, res, next) => {
    try {
        let response = await Location.find();
        res.json(response)
    } catch (err) {
        res.json(err)
    }
})
```
A simple call that uses `Mongoose` to find all `Locations` saved into `MongoDB` and return them to the client as JSON.

### 1st PUT Request:
By clicking on the edit button attached to each card, a user can edit the location selected and save it to the server with the save button. The cancel button will return any changed data back into its original state.
```javascript
router.put('/put', async (req, res, next) => {
    await Location.findByIdAndDelete(req.body._id);
    let location = new Location({
            ip: req.body.ip, 
            country: req.body.country, 
            city: req.body.city, 
            region: req.body.region, 
            timezone: req.body.timezone, 
            organization: req.body.organization
        });
    let addedLocation = await location.save();
    res.json(addedLocation);
})
```
Uses the PUT method which then uses `findByIdAndDelete` to overwrite the saved data with the new data coming in. 

### 1st DELETE Request:
By clicking on the delete icon on the card deletes the IP Address from the database:
```javascript
router.delete('/delete/:id', async (req, res, next) => {
    let id = req.params.id
    try {
        let response = await Location.findByIdAndDelete(id)
        res.json(response)
    } catch (err) {
        console.log(err)
    }
})
```
Deletes the IP by doing `findByIdAndDelete` using `Mongoose` with the paramater ID sent in via url.

# Locations Page:
*(Thor: You should have gotten the API Key comment when I submitted this in Canvas. Add those .env codes to get it to work. :)).*

On this page, each card has its own Google Map that is zoomed in to the latitude/longitude provided. The map is updated upon changing the latitude of the first coordinate in the list if it contains more than one. The Google Map is showing the coordinates of the first coordinate in the list beneath the map.

Getting the data to the locations and coordinates is done so by calling the query:
```javascript
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

const [locations, setLocations] = useState([]);
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
        }
    }
    useEffect(() => {
        locationsState(loading);
    }, [loading])

```

Editing the coordinates will update the map as mentioned above only if it is the first coordinate in the list has been changed including the latitude.
The editing of each coordinate was tricky and getting the FormData and changing it to match how it is returned by GraphQL was the solution. 
I'm using the `useMutation` hook to call the `updateCoor` method.
```javascript
const UPDATE_COORDINATE = gql`
    mutation updateCoordinate($id: Int!, $data: CoordinateCreateInput!) {
        updateCoordinate(id: $id, data: $data) {
            id
            latitude
            longitude
        }
    }
`

const [updateCoor] = useMutation(UPDATE_COORDINATE);
...
organizedArr.forEach(coordinate => {
            updateCoor({variables: { id: coordinate.id, data: {longitude: coordinate.longitude, latitude: coordinate.latitude}}})
        })
```
The updateCoor is called on every coordinate.

Click on the delete icon button on the bottom of every card to delete the card and location.
Deleting the location also deletes the coordinates associated with it:
```javascript
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
```
Took me a while to figure out that the `deleteCoords()` returns a promise. Using the `Promise.all()` method solved the issue of it trying to delete the location before it had deleted all of its coordinates.

## Available queries:

1. ## `allLocations {}`
    - Example:
        ```javascript
        query allLocations {
            allLocations {
                id
                name
                createdAt
                updatedAt
                description
                coordinates {
                    id
                    longitude
                    latitude
                }
            }
        }
        ```

2. ## `allCoordinates {}`
    - Example:
    ```javascript
    query allCoordinates {
        id
        longitude
        latitude
        location {
            id
            name
            description
        }
    }
    ```

3. ## `locationById {}`
    - Example:
    ```javascript
    query locationById {
        locationById(id: 5) {
            id
            name
            description
            createdAt
            updatedAt
            coordinates {
                id
                longitude
                latitude
            }
        }
    }
    ```

4. ## `coordinateById {}`
    - Example:
    ```javascript
    query coordinateById {
        coordinateById(id: 5) {
            id
            latitude
            longitude
            location {
                id
                name
            }
        }
    }
    ```

# Available Mutations:

1. ## `createLocation {}`
    - Example: 
    ```javascript
    mutation createLocation {
        createLocation(data: {
            name: "United Kingdom",
            description: "Island people who once conquered 90% of the planet."
        }) {
            id
            name
            description
            createdAt
            updatedAt
        }
    }
    ```

2. ## `createCoordinate {}`
    - Example:
    ```javascript
    mutation createCoordinate {
        createCoordinate(
            data: {
                longitude: "34",
                latitude: "56"
            },
            locationName: "Luxembourg" //must be an existing location name in database
        ) {
            id
            latitude
            longitude
        }
    }
    ```

3. ## `deleteLocation {}`
    - Example: 
    ```javascript
    mutation deleteLocation(id: 1) {
        id
        name
        description
    }
    ```

4. ## `deleteCoordinate {}`
    - Example: 
    ```javascript
    mutation deleteCoordinate(id: 2) {
        id
        longitude
        latitude
    }
    ```