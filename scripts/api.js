const nodeAxios = require('axios')

const token = {
    "access_token": "xhn4r3ro7wxaton5kajnefdwwczj5u",
    "expires_in": 4784866,
    "token_type": "bearer"
}

nodeAxios({
    url: "https://api.igdb.com/v4/games",
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Client-ID':  'giw12afr5w7xdxxydabwtgiipyvhu9',
        'Authorization': 'Bearer xhn4r3ro7wxaton5kajnefdwwczj5u',
    },
	data: 'fields name, involved_companies; search "Zelda";'
  })
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.error(err);
    });
