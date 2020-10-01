import Express from 'express';
const router = Express.Router;

const games =[
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


router.get('/', (req, res) => {
    res.json(games)
})

router.get('/games/:id', (req, res) => {
    res.json(games.find(product => {
        return +req.params.id === product.id
    }))
})

router.post('/add', (req, res) => {
    let obj = {
        id: req.body.id,
        game: req.body.game,
        type: req.body.type
    }
    games.push(obj);
    res.send(games)
})

module.exports = router;