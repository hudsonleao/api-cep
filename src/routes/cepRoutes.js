
module.exports = (app) => {
    const { controllers: { cepController } } = app;
    app.get('/cep', cepController.getCep);
};