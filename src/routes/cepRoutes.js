
module.exports = (app) => {
console.log('entrei')
    const { controllers: { cepController } } = app;
    app.get('/cep', cepController.getCep);
};