module.exports = ({ services: { cepService } }) => {

    return {
        getCep: async (req, res, next) => {
            try {
                const { query } = req;
                const response = await cepService.get(query);
                res.status(200).json(response);
            } catch (error) {
                next(error);
            }
        },
    }

};