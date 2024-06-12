const express = require('express')

const app = express()

// EJERCICIO 1: levantar servidor:
const puerto = '3000'
app.listen(puerto, () => {
    console.log(`Servidor levantado en el puerto ${puerto}`)
})

// EJERCICIO 2:

// RUTA RAIZ:
// esto le dice que en localhost:3000/
app.get('/', (req, res) => {
    // salga el mensaje de bienvenida:
    res.send('Hola The Bridge')
    // lo está enviando desde root 
})

// mostrar un mensaje que diga listado de productos:
app.get('/Productos', (req, res) => {
    res.send(`Listado de productos`)
})


