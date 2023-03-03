 const express = require('express');

 const app = express();

 //Define Routes
    app.use('/api/users', require('./routes/api/users'));
    app.use('/api/auth', require('./routes/api/auth'));
    app.use('/api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {    res.send('Hello World!');});

 app.listen(PORT, () => console.log(`Server started on port ${PORT}`));