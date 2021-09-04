import express from 'express'

const router = express.Router();


router.get('/', (req, res) =>{
    console.log(req.body);
    res.render('index',{ 
    })
});


router.get('/novo', (req, res) =>{

    res.send({ok:"novo"})
  
});


export default router