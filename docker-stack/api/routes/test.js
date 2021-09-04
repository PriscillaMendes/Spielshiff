import express from 'express'
import db from '../db.js';

const router = express.Router();

router.get('/', async (req, res) =>{

    try {
        const [allUsers] = await db.execute(`SELECT * FROM user`)
        console.log(allUsers);

        res.format({
            html: () => res.render('test',{allUsers}),
            json: () => res.json({allUsers})    //Só se precisar do json
        });
    } catch (error) {
        console.log(error);
    }
    


});


export default router