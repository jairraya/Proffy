import express from 'express';

const app = express();

app.get('users', (request, response) => {
    return response.json('Helo World!');
});

app.listen(3333);