const express = require("express")

const Contenedor = require("./getItems.js")

const productos = new Contenedor("productos.txt")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get("/productos", async(req, res) => {
    let productosAMostrar = await productos.getAll()
    return res.json(productosAMostrar)
})

app.get("/productoRandom", async(req, res) => {
    productosAMostrar = await productos.getAll()
    arryaDePRoductos = [productosAMostrar];
    const numeroAleatorio = Math.ceil((Math.random() * productosAMostrar.length));
    let producstoRandom = await productos.getByID(numeroAleatorio);
    res.json(producstoRandom);

})

app.listen(8080, () => {

    console.log("server on port 8080")
})