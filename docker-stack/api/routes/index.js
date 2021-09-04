import express from 'express'
import nodemailer from 'nodemailer';

import metadata from 'gcp-metadata';
import {OAuth2Client} from'google-auth-library';

const oAuth2Client = new OAuth2Client();

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