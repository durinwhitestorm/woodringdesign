const Ring = require("../models/Ring")

module.exports = {
    saveRing: async (req,res)=>{
        try{
            await Ring.create({title:req.body.ringTitleJS, core:req.body.layerOneJS, layer1:req.body.layerTwoJS, layer2:req.body.layerThreeJS, layer3:req.body.layerFourJS, layer4:req.body.layerFiveJS, layer5:req.body.layerSixJS, layer6:req.body.layerSevenJS, layer7:req.body.layerEightJS, layer8:req.body.layerNineJS, userId:req.user.id})
            console.log('Saved ring')
        }catch(err){
            console.log(err)
        }
    },
    // getRings: async (req,res)=>{
    //     console.log(req.user)
    //     try{
    //         await Ring.find({userId:req.user.id})
    //         res.render('profile.ejs', {})
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
}