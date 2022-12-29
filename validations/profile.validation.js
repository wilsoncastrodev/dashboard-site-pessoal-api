import Joi from "joi";
import { dataValidation } from "../utils/validations.js";

export const updateProfileValidation = data => {
    return dataValidation(data, {
        name: Joi.string().required().messages({
            'any.required': 'O campo Nome é obrigatório',
            'string.empty': 'O campo Nome é obrigatório',
            'string.base': 'O campo Nome é inválido',
        }),
        profession: Joi.string().required().messages({
            'string.base': 'O campo Profissão é inválido',
        }),
        aboutMe: Joi.string().required().messages({
            'string.base': 'O campo Sobre Mim é inválido',
        }),
        characteristic: Joi.array().items(Joi.string().messages({
            'string.base': 'O campo Caracteristica é inválido',
        })),
        contact: joi.object({
            website: joi.string().required().messages({
                'string.base': 'O campo Website é inválido',
            }),
            phone: joi.string().required().messages({
                'string.base': 'O campo Telefone é inválido',
            }),
            location: joi.string().required().messages({
                'string.base': 'O campo Localização é inválido',
            })
        }),
        social: joi.object({
            gihub: joi.string().messages({
                'string.base': 'O campo Github é inválido',
            }),
            linkedin: joi.string().messages({
                'string.base': 'O campo Linkedin é inválido',
            })
        }),
    });
}
