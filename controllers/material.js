const Material = require('../models/Material')

module.exports = {
    getMaterial: async (req,res)=>{
        try{
            const materialType = await Material.find({type: req})
            res.render('index.ejs', {name: materialType, image: materialType})
        }catch(err){
            console.log(err)
        }
    },
}