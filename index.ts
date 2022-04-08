import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000


app.get('/', (req, res) => {
    res.send('Pagina GET')
})


app.post('/pagina-post', (req, res) => {
    res.send('Pagina POST')
})


app.listen(PORT, () => {
    console.log("Server is Running")
})