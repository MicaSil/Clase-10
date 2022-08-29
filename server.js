const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/test', (req, res) =>{
    const datos = {
        min: 1,
        max: 10,
        value: 7,
        titulo: 'Medidior de temperatura'
    }
    res.render('medidor', datos);
});

app.get('/test', (req, res) =>{
    const datos = {
        min: req.query.min,
        max: 10,
        value: 7,
        titulo: 'Medidor de temperatura'
    }
    res.render('medidor', datos);
});

const PORT = 5001;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escucando el puerto ${PORT}`);
})

server.on('error', error =>{
    console.log(`Error en el servidor ${error}`)
})
