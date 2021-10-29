const httpStatusCode = require('./httpStatusCode');
module.exports = {
    badRequest: (error, entity, step) => {
        throw ({
            code: httpStatusCode.code.BAD_REQUEST,
            error,
            entity,
            step,
            message: httpStatusCode.message.BAD_REQUEST,
        });
    },
    unauthorized: (error, entity, step) => {
        throw ({
            code: httpStatusCode.code.UNAUTHORIZED,
            error,
            entity,
            step,
            message: httpStatusCode.message.UNAUTHORIZED,
        });
    },
    notFound: (error, entity, step) => {
        throw ({
            code: httpStatusCode.code.NOT_FOUND,
            error,
            entity,
            step,
            message: httpStatusCode.message.NOT_FOUND,
        });
    },
    unprocessableEntity: (error, entity, step) => {
        throw ({
            code: httpStatusCode.code.UNPROCESSABLE_ENTITY,
            error,
            entity,
            step,
            message: httpStatusCode.message.UNPROCESSABLE_ENTITY,
        });
    },
    internalServerError: (error, entity, step) => {
        throw ({
            code: httpStatusCode.code.INTERNAL_SERVER_ERROR,
            error,
            entity,
            step,
            message: httpStatusCode.message.INTERNAL_SERVER_ERROR,
        });
    }
};