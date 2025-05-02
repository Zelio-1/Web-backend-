const mongoose = require ('mongoose')

const comentarioSchema = mongoose.Schema({

    texto: {
        type: String,
        required: [true, "Por favor ingrese un comentario"]

    },
},{
    timestamps: true 
}
)

module.exports = mongoose.model("Comentario", comentarioSchema)