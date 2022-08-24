const express = require('express');

const app = express();

app.use(express.static('./public'));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res)=>{
    const { min, nivel, max, titulo } = req.query;
    res.render('vista', {min, nivel, max, titulo});
});

const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor esuchando en el puerto ${server.address().port}`)
});

server.on('error', err => console.log(`error en server ${err}`))