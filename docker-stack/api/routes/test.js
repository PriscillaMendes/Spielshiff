import express from 'express';
import db from '../db.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {

    try {
        res.format({
            html: () => res.render('library'),
            json: () => res.json({  })    //Só se precisar do json
        });
    } catch (error) {
        console.log(error);
    }



});

export default router