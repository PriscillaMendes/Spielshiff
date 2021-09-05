import express from 'express';
import db from '../db.js';

router.post('/register_avaliacoes', async (req, res) => {
    const { game_name, reg_user_email, gostou, titulo_avaliacao, texto_avaliacao } = req.body;

    try {
        const [findOne] = await db.execute(`SELECT * FROM avaliacoes WHERE game_name=? AND reg_user_email=?`, [game_name, reg_user_email]);

        if (findOne.length > 0) {
            await db.execute(`DELETE * FROM avaliacoes WHERE game_name=? AND reg_user_email=?`, [game_name, reg_user_email]);
        }
        const [insertAvaliacao] = await db.execute(`INSERT INTO avaliacoes VALUES (0,"${game_name}","${reg_user_email}"," ${gostou}", "${titulo_avaliacao}", "${texto_avaliacao}")`);
        if (!insertAvaliacao || insertAvaliacao.affectedRows < 1) {
            throw new error("Erro na inserção");
        }

        res.redirect('/references/avaliacoes')
    } catch (error) {
        console.log(error.message)
        res.send({ error: error.message })
        res.redirect('/references/avaliacoes')

    }
});

router.get('/get_avaliacao', async (req, res) => {
    const {game_name, reg_user_email} = req.body;

    try {
        return await db.execute(`SELECT * FROM avaliacoes WHERE game_name=? AND reg_user_email=?`, [game_name, reg_user_email]);
    } catch (error) {
        console.log(error.message)
        res.send({ error: error.message })
        res.redirect('/references/avaliacoes')

    }
});

router.get('/get_avaliacoes', async (req, res) => {
    const {game_name} = req.body;

    try {
        return await db.execute(`SELECT * FROM avaliacoes WHERE game_name=?`, [game_name]);
    } catch (error) {
        console.log(error.message)
        res.send({ error: error.message })
        res.redirect('/references/avaliacoes')

    }
});