const express = require('express')

const app = express()

app.get('/products', async (req, res) => {

    const products = [
        {
            id: 1,
            name: 'Iphoone-13',
            price: 100000
        },
        {
            id: 2,
            name: 'Mixer',
            price: 4000
        }
    ];

    return res.json(products);
})


app.listen(8000, function () {
    console.log('Listening on port 8000');
})