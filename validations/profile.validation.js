import Joi from "joi";
import { dataValidation } from "../utils/validations.js";

export const updateProfileValidation = data => {
    return dataValidation(data, {
        name: Joi.string().required().messages({
            'any.required': 'O campo Nome é obrigatório',
            'string.empty': 'O campo Nome é obrigatório',
            'string.base': 'O campo Nome é inválido',
        }),
    });
}
