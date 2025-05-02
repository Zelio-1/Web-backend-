const asyncHandler = require ('express-async-handler')
const Colaboracion_modelo = require ("../models/colaboracionesModel")

const getColaboracion =  asyncHandler(async(request, response) =>{
    const colaboraciones = await Colaboracion_modelo.find({})
    response.status (200).json({colaboraciones})
})

const createColaboracion = asyncHandler(async(request, response) =>{
    if(!request.body.nombre){
        response.status(400)
        throw new Error ("Escriba un nombre")
    }
    if(!request.body.generos){
        response.status(400)
        throw new Error ("Escriba los generos musicales")
    }
    if(!request.body.estilos){
        response.status(400)
        throw new Error ("Escriba los estilos musicales")
    }
    if(!request.body.correo){
        response.status(400)
        throw new Error ("Escriba un correo electronico")
    }
    const colaboracion = await Colaboracion_modelo.create({
        nombre: request.body.nombre,
        generos: request.body.generos,
        estilos: request.body.estilos,
        correo: request.body.correo
    })
    response.status (200).json({colaboracion})
})

const updateColaboracion = asyncHandler (async(request, response) =>{
    const colaboracion = await Colaboracion_modelo.findById (request.params.id) 
    if(!colaboracion){
        response.status (404)
        throw new Error ('Colaboracion no encontrada')
    }

    const colaboracion_update = await Colaboracion_modelo.findByIdAndUpdate (request.params.id, request.body, {
        new: true
    })
    response.status (200).json(colaboracion_update)
})

const deleteColaboracion = asyncHandler(async(request, response) =>{
    const colaboracion = await Colaboracion_modelo.findById (request.params.id) 
    if(!colaboracion){
        response.status (404)
        throw new Error ('Colaboracion no encontrada')
    }

    await colaboracion.deleteOne ()

    response.status (200).json({"id": request.params.id})
})

module.exports = {
    getColaboracion,
    createColaboracion,
    updateColaboracion,
    deleteColaboracion
}