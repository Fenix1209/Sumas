const express = require('express');
const app = express();
const morgan = require ('morgan');
const cors =require('cors');
const port = 3000;

// Middleware para procesar JSON
app.use(express.json());
app .use(morgan('dev'));
app .use (expreess.unlencoded({extended:false}));
app .use (expreess.json());
app .use (cors());

// Configuración del puerto y formato JSON
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// Ruta principal - GET /
app.get('/', (req, res) => {
    res.json({
        Title: 'Hola mundo'
    });
});
app.get('/hola', (req, res) => {
    res.json({
        Title: 'Cambios'
    });
});

// Ruta mensaje - GET /mensaje
app.get('/mensaje', (req, res) => {
    res.json({
        Title: 'Este es mi nuevo servidor'
    });
});

// Ruta para sumar dos números - POST /sumar
app.post('/sumar', (req, res) => {
    const { num1, num2 } = req.body;

    // Validación: asegurarse de que ambos números estén presentes
    if (num1 == null || num2 == null) {
        return res.status(400).json({ error: 'Faltan dos números para sumar' });
    }

    // Realizar la suma
    const resultado = num1 + num2;

    // Enviar resultado como JSON
    res.json({ resultado });
});

// Iniciar el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor escuchando en http://localhost:${app.get('port')}`);
});
