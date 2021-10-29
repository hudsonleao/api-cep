const porta = 3000;
const app = require('./configs/express')();

app.listen(porta, () => console.log(`API CEP iniciou... \nURL: http://localhost:${porta}`));

module.exports = app;