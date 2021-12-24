import joi from 'joi';

const VframeSchema = joi.object().keys({
    timestamp: joi.number().required(),
    url: joi.string().required(),
});

export default VframeSchema;
