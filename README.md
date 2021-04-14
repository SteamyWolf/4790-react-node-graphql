# Accessing this server
This server is currently running on heroku at https://ip-address-app-wyatt.herokuapp.com. All requests can be sent there as detailed below:

# REQUESTS:
There are multiple requests this api will bring back to you. You can Create, Read, Update, and Delete with this API as it is pushing data onto a database and retrieving it. Use the following requests to manipulate the data:

## GET
There are three types of GET requests for this server. One of which holds two requests.
GET #1: `https://ip-address-app-wyatt.herokuapp.com/:ip` which also grabs:
GET #2: `http://ip-api.com/json/${req.params.ip}`
These 2 requests both take in data. The first accepts data passed in as an IP Address through the paramaters. This is initiated by the client.
The second one takes the first GET request and uses a node fetch (provided by a third party dependency) to reach out to another API that returns information about the requested IP Address. It'll return fields such as provider, location, city, region, timezone etc,.
GET #3: `https://ip-address-app-wyatt.herokuapp.com/favorites`
This request is automatically called when a user visits the `/favorites` page. It returns all data from the database involving the saved IP Addresses. 

## POST
POST request: `https://ip-address-app-wyatt.herokuapp.com/saveLocation`
This POST request can be made sending data as JSON through the body and will be sent to save a new IP Address document to the database. Be sure to include in the body: ip, country, city, region, timezone, and organization as these are all required fields. This data should be readily available to you through the GET requests above.

## PUT
PUT request: `https://ip-address-app-wyatt.herokuapp.com/put`
The PUT request is sent to save an edited IP Address document to the database. This is done by also requiring certain fields: ip, country, city, region, timezone, and organization all as JSON just like the POST request. This will find a document that matches the IP address id and delete it. Then it replaces the saved one with the new data sent over.

## DELETE
DELETE request: `https://ip-address-app-wyatt.herokuapp.com/delete/:id`
The delete request will find the correct IP Address id from the database and simply delete it. It will return an error if you sent an ip address over that is not already saved in the database. All returning information is either the deleted IP or the error code all as JSON format. 
# 4790-react-node-graphql
