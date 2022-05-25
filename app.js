const express = require('express')
const mongoose = require('mongoose');

require('dotenv').config()

const app = express()

app.use(express.json())

const Product = require('./models/Products')

mongoose.connect(process.env.MONGODB_URI)
    .then(async () => {
        console.log('connected to database');

    }).catch(e => console.log(e))


app.get('/products', async (req, res) => {
    const products = await Product.find()
    res.json(products);

})

app.post('/products', async (req, res) => {
    Product.create({
        name: "T-shirt",
        price: 500
    })
    console.log(req.body);
    res.json(req.body)
})

app.delete('/products/:id', async ( req, res) => {
    const product = await Product.deleteOne({ name: 'Something awesome' })
    res.json(product);
})

app.put('/products/:id', async (req, res) => {
    const product = await Product.findByIdAndUpdate("6289079b76f13dcc00b778ab", {price: 20000})
    res.json(product);
})


app.listen(8000, function () {
    console.log('Listening on port 8000');
})