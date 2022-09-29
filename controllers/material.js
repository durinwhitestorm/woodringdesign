const Material = require('../models/Material')
const cloudinary = require("../middleware/cloudinary");

module.exports = {
    getMaterial: async (req,res)=>{
        try{
            const materialType = await Material.find({type: req})
            res.render('index.ejs', {name: materialType, image: materialType})
        }catch(err){
            console.log(err)
        }
    },
    getIndex: async (req,res)=>{
        try{
            const material = await Material.find({type: 'wood'})
            res.render('index.ejs', {material: material})
        }catch(err){
            console.log(err)
        }
    },
    createMaterial: async (req,res)=>{
        try {
            // Upload image to cloudinary
            const result = await cloudinary.uploader.upload(req.file.path);
      
            await Material.create({
              type: req.body.matType,
              name: req.body.matName,
              image: result.secure_url,
              cloudinaryId: result.public_id,
            });
            console.log("Material has been added!");
            res.redirect("/");
          } catch (err) {
            console.log(err);
          }
    },
}