var Heros = require('./heros.controller');

module.exports = (router)=>{
    router.post('/create',Heros.createHero);
    router.get('/get',Heros.getHeros);
    router.get('/get/:name',Heros.getHero);
    router.put('/update/:id',Heros.updateHeros);
    router.delete('/remove/:id',Heros.removeHero);
}