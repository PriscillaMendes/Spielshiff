import express from 'express'
import authMiddleware from '../middleware/auth.js';


const router = express.Router();

router.use(authMiddleware);

router.get('/', (req, res, next) =>{
    console.log("Perfil")
    res.render('perfil', {isUserAuthenticated: true})

});


export default router