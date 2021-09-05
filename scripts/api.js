const nodeAxios = require('axios')

const token = {
    "access_token": "xhbtdkm17lb7dvghgj8195axtde8vg",
    "expires_in": 4784866,
    "token_type": "bearer"
}

nodeAxios({
    url: "https://api.igdb.com/v4/games",
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Client-ID':  'giw12afr5w7xdxxydabwtgiipyvhu9',
        'Authorization': 'Bearer xhbtdkm17lb7dvghgj8195axtde8vg',
    },
    data: 'search "Halo"; fields name,release_date.human;'
  })
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.error(err);
    });
