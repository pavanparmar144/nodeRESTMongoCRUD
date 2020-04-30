var Heros = require('./heros.dao');

exports.createHero = (req,res, next)=>{
    var hero = {
        name:req.body.name,
        description:req.body.description
    };
    Heros.create(hero,(err,hero)=>{
        if(err){
            res.json({
                error:err
            })
        }
        res.json({
            message:"Hero created successfully"
        })
    })
}

exports.getHeros = (req,res,next)=>{
    Heros.get({},(err,heros)=>{
        if(err){
            res.json({
                error:err
            })
        }
        res.json({
            heros: heros
        })
    })
}

exports.getHero = function(req, res, next) {
    Heros.get({name: req.params.name}, function(err, heros) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            heros: heros
        })
    })
}

exports.updateHeros = (req,res,next)=>{
    var hero ={
        name:req.body.name,
        description:req.body.description
    }
    Heros.update({_id:req.params.id},hero,(err,hero)=>{
        if(err){
            res.json({
                error:err
            })
        }
        res.json({
            message:"Hero updated Successfully"
        })
    })
}

exports.removeHero = (req,res,next)=>{
    Heros.delete({_id:req.params.id},(err,hero)=>{
        if(err){
            res.json({
                error:err
            })
        }
        res.json({
            message:"Hero deleted successfully"
        })
    })
}
