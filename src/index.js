var app = require('./config/custom-express')();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.listen(3000, ()=> {
    console.log('Servidor na porta 3000...');
});

