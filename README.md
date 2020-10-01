# API Information:

This API serves a JSON format of 4 different video games. This API can be changed with a DELETE and PUT request. In addition, retrieving the information will be outlined below.


## GET Request Basic

Use a GET request on: ```https://wyatt-first-nodejs.herokuapp.com/``` to get information on 4 diffeent games:
```javascript
    {
        id:1,
        game: 'World Of Warcraft',
        type: 'MMORPG'
    },
       {
        id:2,
        game: 'Shadow of the Colossus',
        type: 'RPG/Adventure'
    },
       {
        id:3,
        game: 'Halo',
        type: 'First Person Shooter'
    },
    {
        id: 4,
        game: 'Super Smash Brothers',
        type: 'Fighter'
    }
```


## GET Request on specific game id

You can also get information about just one game. Send a request to ```https://wyatt-first-nodejs.herokuapp.com/games/get/:id``` to get a specific game of your choosing.

```javascript
    {
        id:2,
        game: 'Shadow of the Colossus',
        type: 'RPG/Adventure'
    }
```


## PUT Request 

Change the game information by using a PUT request at ```https://wyatt-first-nodejs.herokuapp.com/games/update/:id```.

Be sure to have your body like so: 
```javascript
{
    id: EXISTING GAME ID,
    game: GAME NAME,
    type: GAME TYPE
}
```


## DELETE Request

You can delete a post by specifying the id you want to delete in the url like so: ```https://wyatt-first-nodejs.herokuapp.com/games/delete/:id```

JSON will be returned to verify a deletion.



## POST Request

Add to the list of games by sending a POST request to: ```https://wyatt-first-nodejs.herokuapp.com/games/add```

Be sure to also include a body as in the PUT request as:
```javascript
{
    id: GAME ID,
    game: GAME NAME,
    type: GAME TYPE
}
```

*Enjoy the API!*