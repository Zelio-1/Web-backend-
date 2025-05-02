const express = require ('express')
const router = express.Router()
const {getColaboracion, createColaboracion, updateColaboracion, deleteColaboracion} = require ("../controllers/colaboracionesControllers")

router.get('/', getColaboracion)

router.post('/', createColaboracion)

router.put('/:id', updateColaboracion)

router.delete('/:id', deleteColaboracion)

module.exports = router