const {Router} = require('express');
const router = Router();

//Routes
router.get('/',(req,res)=>{
    res.send('Autor Bryan Flores');
});


module.exports=router;