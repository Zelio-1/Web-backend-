const express = require ('express')
const router = express.Router()
const {getComentario, createComentario, updateComentario, deleteComentario} = require ("../controllers/comentariosControllers")

router.get('/', getComentario)

router.post('/', createComentario)

router.put('/:id', updateComentario)

router.delete('/:id', deleteComentario)

module.exports = router