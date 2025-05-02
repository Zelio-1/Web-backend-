const asyncHandler = require ('express-async-handler')
const Comentario_modelo = require ("../models/comentariosModel")

const getComentario =  asyncHandler(async(request, response) =>{
    const comentarios = await Comentario_modelo.find({})
    response.status (200).json({comentarios})
})

const createComentario = asyncHandler(async(request, response) =>{
    if(!request.body.texto){
        response.status(400)
        throw new Error ("Escriba un comentario")
    }
    const comentario = await Comentario_modelo.create({
        texto: request.body.texto
    })
    response.status (200).json({comentario})
})

const updateComentario = asyncHandler (async(request, response) =>{
    const comentario = await Comentario_modelo.findById (request.params.id)  
    if(!comentario){
        response.status (404)
        throw new Error ('Comentario no encontrado')
    }

    const comentario_update = await Comentario_modelo.findByIdAndUpdate (request.params.id, request.body, {
        new: true
    })
    response.status (200).json(comentario_update)
})

const deleteComentario = asyncHandler(async(request, response) =>{
    const comentario = await Comentario_modelo.findById (request.params.id)
    if(!comentario){
        response.status (404)
        throw new Error ('Comentario no encontrado')
    }

    await comentario.deleteOne ()

    response.status (200).json({"id": request.params.id})
})

module.exports = {
    getComentario,
    createComentario,
    updateComentario,
    deleteComentario
}