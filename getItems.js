const fs = require("fs");

class Contenedor {
    constructor(nameFile) {
        this.nameFile = nameFile;
    }

    getByID = async(id) => {
        try {
            //If para comprobar si el archivo existe
            if (fs.existsSync(this.nameFile)) {
                const contenidoDelArchivo = await fs.promises.readFile(this.nameFile, "utf-8")
                    //If para comprobar si el archivo esta vacio
                if (contenidoDelArchivo) {
                    const contenidoEnJSON = JSON.parse(contenidoDelArchivo)
                    const productoSolicitado = contenidoEnJSON.find(item => item.id === id)
                        //If para comprobar si el archivo tiene le ID solicitado
                    if (productoSolicitado != undefined) {
                        return productoSolicitado
                    } else {
                        return ("No existe el  id solicitado")
                    } //fin del if para comprobar si existe ID
                } else {
                    console.log("el archivo esta vacio")
                } //fin del if para comprobar si el archivo esta vacio
            } else {
                console.log("El archivo no existe")
            } // Fin del if para comprabar si el archivo existe

        } catch (error) {
            console.log(error)
        }
    }


    getAll = async() => {
        try {
            //If para comprobar si el archivo existe
            if (fs.existsSync(this.nameFile)) {
                const contenidoDelArchivo = await fs.promises.readFile(this.nameFile, "utf-8")
                    //If para comprobar si el archivo esta vacio
                if (contenidoDelArchivo) {
                    const contenidoEnJSON = JSON.parse(contenidoDelArchivo)
                        //If para comprobar si el archivo tiene le ID solicitado
                    return contenidoEnJSON
                        //fin del if para comprobar si existe ID
                } else {
                    console.log("el archivo esta vacio")
                } //fin del if para comprobar si el archivo esta vacio
            } else {
                console.log("El archivo no existe")
            } // Fin del if para comprabar si el archivo existe

        } catch (error) {
            console.log(error)
        }
    }

}


module.exports = Contenedor