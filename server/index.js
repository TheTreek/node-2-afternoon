const express = require('express');
const mc = require('./controllers/messages_controller')

app = express();
app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

const messageAPI = '/api/messages';
app.post(messageAPI, mc.create);
app.get(messageAPI, mc.read);
app.put(`${messageAPI}/:id`, mc.update);
app.delete(messageAPI+"/:id",mc.delete);

app.listen(3001, ()=>console.log('Server listening on port 3001'));
