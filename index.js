import Express from 'express';

const app = Express();
const port = 3000;
app.use(Express.json())
app.use(Express.urlencoded({extended: true}))

let games =[
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
];

app.get('/', (req, res) => {
    console.log(games);
    res.json(games)
})

app.get('/games/get/:id', (req, res) => {
    res.json(games.find(product => {
        return +req.params.id === product.id
    }))
})

app.put('/games/update/:id', (req, res) => {
    let id = req.params.id;
    let foundGame = games.find(game => game.id === +id);
    foundGame.game = req.body.game;
    foundGame.type = req.body.type;
    res.json(games)
});

app.delete('/games/delete/:id', (req, res) => {
    let id = req.params.id;
    let foundGame = games.find(game => game.id === +id);
    if (foundGame) {
        games = games.filter(game => game.id !== +id);
    } else {
        res.status(404).json({message: 'Game not found. Try a different id'})
    }
    res.json(games);
})

app.post('/games/add', (req, res) => {
    let obj = {
        id: req.body.id,
        game: req.body.game,
        type: req.body.type
    }
    games.push(obj);
    res.json(games)
});

app.listen(port, ()=> {
    console.log('Listening on port 3000');
})