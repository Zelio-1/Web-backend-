const express = require ('express')
const dotenv = require ('dotenv').config()
const port = process.env.PORT || 5000
const colors = require ('colors')
const connectDB = require ("./config/db")
const {errorHandler} = require ("./middleware/errorMiddleware")

const app = express()

connectDB ()

app.use(express.json())

app.use(express.urlencoded({extended: false}))

app.use('/api/comentarios', require('./routes/comentariosRoutes'))
app.get('/api/comentarios', (request, response)=>{
    response.send('Obtener Comentarios')
})

app.use('/api/colaboraciones', require('./routes/colaboracionesRoutes'))
app.get('/api/colaboraciones', (request, response)=>{
    response.send('Obtener Colaboraciones')
})

app.use (errorHandler)

app.listen(port, ()=> console.log(`Servidor iniciando en el puerto ${port}`))