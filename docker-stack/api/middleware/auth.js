import jwt from "jsonwebtoken";

import { readFile } from 'fs/promises';
const authConfig = JSON.parse(await readFile(new URL('../config/auth.json', import.meta.url)));

//import authConfig from "../config/auth.json";

export default (req, res, next) => {

    let authToken = "";
    const { cookies } = req;

    if ("nginxAccessToken" in cookies) {
        authToken = cookies.nginxAccessToken;
    } else {
        authToken = req.headers.authorization;
    }

    try {
        if (!authToken) throw error; // error: 'No token provided'

        const parts = authToken.split(' ');

        if (!parts.length === 2) throw error; // error: 'Malformatted token'

        const [scheme, token] = parts;

        if (!/^Bearer$/i.test(scheme)) throw error; // error: 'Malformatted token '


        jwt.verify(token, authConfig.secret, (err, decoded) => {
            if (err) throw error; // error: 'Invalid token'

            req.userId = decoded.id;
            next();
        });

    } catch (error) {

        res.format({
            html: () => {
                res.redirect('/')
            },
            json: () => res.status(401).send({ error: 'Token error' })
        });
    }

};

