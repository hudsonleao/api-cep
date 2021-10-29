module.exports = (app) => {
    app.use((err, req, res, next) => {

        const errorCode = err.code || 500;
        const erroMessage = err.message || 'Internal Server Error';

        res.status(errorCode).json({
            error: err.error,
            entity: err.entity,
            step: err.step,
            message: erroMessage
        });

        app.logger.error(err);
    });
};