const mongoose = require ('mongoose')

const colaboracionSchema = mongoose.Schema({

    nombre: {
        type: String,
        required: [true, "Por favor ingrese su nombre"]

    },
    generos: {
        type: String,
        required: [true, "Por favor ingrese sus generos musicales"]
    },
    estilos: {
        type: String,
        required: [true, "Por favor ingrese los estilos de musica"]
    }, 
    correo: {
        type: String,
        required: [true, "Por favor ingrese su correo electronico"]
    },
},{
    timestamps: true 
}
)

module.exports = mongoose.model("Colaboracione", colaboracionSchema)