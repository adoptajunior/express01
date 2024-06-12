const express = require('express')

const app = express()

const mysql = require('mysql2')

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

// método incorporado en express para reconocer el objeto de solicitud entrante como objeto JSON
app.use(express.json())

// Ruta: Productos, Método: post, Acción: Mostrar un mensaje que diga: crear un producto
app.post('/Productos', (req, res) => {
    res.send(`Crear un producto`)
})

// Ruta: Productos, Método: put, Acción: Mostrar un mensaje que diga: actualizar un producto
app.put('/Productos', (req, res) => {
    res.send(`Actualizar un producto`)
})

// Ruta: Productos, Método: delete, Acción: Mostrar un mensaje que diga: borrar un producto
app.delete('/Productos', (req, res) => {
    res.send(`Borrar producto`)
})

// Ruta: Usuarios, Metodo: get, Acción: Mostrar un mensaje que diga: listado de usuarios
app.get('/Usuarios', (req, res) => {
    res.send(`Listado de usuarios`)
})

// Ruta: Usuarios, Método: post, Acción: Mostrar un mensaje que diga: crear un usuario
app.post('/Usuarios', (req, res) => {
    res.send(`Crear un usuario`)
})

// Ruta: Usuarios, Metodo: put, Acción: Mostrar un mensaje que diga: actualizar un usuario
app.put('/Usuarios', (req, res) => {
    res.send(`Actualizar un usuario`)
})

// Ruta: Usuarios, Metodo: delete, Acción: Mostrar un mensaje que diga: borrar un usuario
app.delete('/Usuarios', (req, res) => {
    res.send(`Borrar un usuario`)
})

// Utilizar Postman para probar todos los llamados
// FUNCIONA :)

// Ejercicio 3

// Al llamar a localhost: 3000 / products se debe mostrar el siguiente JSON:
/*
{
    description: 'Productos',
        items: [
            { id: 1, nombre: 'Taza de Harry Potter', precio: 300 },
            { id: 2, nombre: 'FIFA 22 PS5', precio: 1000 },
            { id: 3, nombre: 'Figura Goku Super Saiyan', precio: 100 },
            { id: 4, nombre: 'Zelda Breath of the Wild', precio: 200 },
            { id: 5, nombre: 'Skin Valorant', precio: 120 },
            { id: 6, nombre: 'Taza de Star Wars', precio: 220 }
        ]
}
*/

const productos = [
    { id: 1, nombre: 'Taza de Harry Potter', precio: 300 },
    { id: 2, nombre: 'FIFA 22 PS5', precio: 1000 },
    { id: 3, nombre: 'Figura Goku Super Saiyan', precio: 100 },
    { id: 4, nombre: 'Zelda Breath of the Wild', precio: 200 },
    { id: 5, nombre: 'Skin Valorant', precio: 120 },
    { id: 6, nombre: 'Taza de Star Wars', precio: 220 }
]

// Uso una ruta distinta para que no se pise con la anterior
app.get('/Productos/JSON', (req, res) => {
    res.status(200).send(productos)
})

// Crear endpoint para poder crear un producto nuevo


// Crear endpoint para poder actualizar un producto


// Crear endpoint para poder eliminar un producto


// Crear filtro por precio de producto


// Crear filtro que muestre los productos con un precio entre 50 y 250.


// Crear un filtro que cuando busque en postman por parámetro el id de un producto me devuelva ese producto


// Crear un filtro que cuando busque en postman por parámetro el nombre de un producto me devuelva ese producto


