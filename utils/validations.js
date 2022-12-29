import Joi from "joi";

export const dataValidation = (data, schema) => {
    schema = Joi.object().keys(schema).unknown(true);

    let { error } = schema.validate(data, { abortEarly: false });

    if (!error) {
        return null;
    }

    let errorMessages = {};

    for (let err of error.details) {
        errorMessages[err.context.label] = err.message;
    }

    return errorMessages;
}

export const objectIdValidation = (_id) => {
    let schema = {
        _id: Joi.objectId().required(),
    };

    return validateData(schema, _id);
}

export const limitValitation = (limit) => {
    let schema = {
        limit: Joi.number().required(),
    };

    return validateData(schema, limit);
}

export const passwordValidation = (value, helpers) => {
    if (value.length < 8) {
        return helpers.message('A Senha deve conter pelo menos 8 caracteres');
    }

    if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
        return helpers.message('A Senha deve conter pelo menos uma letra e um número');
    }

    return value;
};
