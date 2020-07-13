import express, { request, response } from 'express';

const app = express();


const users = [
    'Diego',
    'Cleiton',
    'Robson',
    'Felipe'
];

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    return response.json();
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});


app.post('/users', (request, response) => {
    const user = {
        name: 'Felipe',
        email: "wfelipefarina@gmail.com"
    };

    return response.json(user);
})

app.listen(8080);

