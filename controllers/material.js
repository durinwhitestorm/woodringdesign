const Material = require('../models/Material')

module.exports = {
    getMaterial: async (req,res)=>{
        console.log(req.type)
        try{
            const materialItem = await Material.find({type:req})
            res.render('index.ejs', {material: materialItem, image: image})
        }catch(err){
            console.log(err)
        }
    },
}