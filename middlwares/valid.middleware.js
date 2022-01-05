module.exports = {
    isBodyValidate: (validator) => async (req, res, next) => {
        try {
            const {body} = req;

            await validator.validate(body);

            next();
        } catch (err) {
            next(err);
        }
    }
};
