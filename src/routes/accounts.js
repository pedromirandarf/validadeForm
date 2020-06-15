
const AccountController = require('../controller/account');


module.exports= (app) => {
    app.get('/teste', (req, res)=>{
        console.log('Recebida a requisao de teste');
        res.send('OK');
    });

    app.get('/accounts', AccountController.listAccounts);

}
