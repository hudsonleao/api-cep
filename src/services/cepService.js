const consultaCep = require('cep-promise');
const exception = require('../../utils/errorsHandling');

module.exports = () => {

    return {

        get: async ({ cep }) => {
           
            try {
                return await consultaCep(cep);
            } catch (error) {
                exception.badRequest(error.errors[0].message);
            }
        },
    };
};