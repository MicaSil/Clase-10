const express = require('express');

const app = express();

app.use(express.static('./public'));
app.use(express.urlencoded({extended: true}))

app.set('views', './views');
app.set('view engine', 'pug');


const DB_PRODUCTOS = []

app.get('/', (req, res)=>{
    res.render('vista', {DB_PRODUCTOS})
})
app.post('/productos', (req, res) => {
    DB_PRODUCTOS.push(req.body)
    console.log(DB_PRODUCTOS)
    res.redirect('/') 
})

const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor esuchando el puerto ${server.address().port}`)
});

server.on('error', err => console.log(`Error en server ${err}`));
