const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Standard route
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Cuatro Cuartos | Galería de Muebles de Autor',
        description: 'Muebles de diseño exclusivo en Tonalá. Minimalismo, texturas orgánicas y Wabi-sabi.'
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
