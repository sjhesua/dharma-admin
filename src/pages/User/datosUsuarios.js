import axios from 'axios';

const res = axios.get(`https://mozorun-backend.herokuapp.com/restaurants`)
.then(res => {
    return  usuarios = res.data
})
.catch(error => {
    console.log(error);
});

export const usuarios = [
    {
        "id":1,
        "first_name":"Jhesua",
        "last_name":"Sifontes",
        "state":true,
        "detalles":1
    },
    {
        "id":2,
        "first_name":"Madeley",
        "last_name":"Bastidas",
        "state":false,
        "detalles":1
    }
]