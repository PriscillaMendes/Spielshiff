import express from 'express'
import db from '../db.js';

const router = express.Router();

// router.get('/', (req, res) =>{
//     console.log(req.body);
//     res.render('library',{ 
//     })
// });

router.post('/create-gamelist', async(req, res) => {
    const {reg_userlist_name} = req.body;
    try{
        if(reg_userlist_name === ''){
            throw new Error('Dê um nome a sua gamelist!');
        }

        const [insertUserlist] = await db.execute(`INSERT INTO usrlists VALUES (0, "${reg_userlist_name}",1)`);

        if (!insertUserlist || insertUserlist.affectedRows < 1) {
            throw new error("Erro na inserção");
        }
        res.redirect('/library')
    }
    catch(error){
        console.log(error.message)
        res.send({ error: error.message})
        // res.redirect('/')
    }
})

router.get('/', async(req, res) => {
    // const {playlist_name} = req.body;

    try{
        const [user_gamelists] = await db.execute('SELECT * FROM usrlists WHERE usr_id=1')
        console.log("kole")        
        console.log(user_gamelists)

        res.format({
            html: () => res.render('library',{user_gamelists}),
            json: () => res.json({user_gamelists})    //Só se precisar do json
        });
    }
    catch(error){
        console.log(error.message)
        res.send({ error: error.message})
        // res.redirect('/')
    }
})


export default router