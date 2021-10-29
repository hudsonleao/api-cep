const consultaCep = require('cep-promise');
const exception = require('../../utils/errorsHandling');

module.exports = () => {

    return {

        get: async ({ cep }) => { 
            try {
                const {
                    cep: cepResponse,
                    state: estado,
                    city: cidade,
                    neighborhood: bairro,
                    street: rua
                  } = await consultaCep(cep);
                return {
                    cep: cepResponse,
                    estado,
                    cidade,
                    bairro,
                    rua
                }
            } catch (error) {
                exception.badRequest(error.errors[0].message);
            }
        },
    };
};