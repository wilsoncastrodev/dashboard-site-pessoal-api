import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import { createToken } from "../utils/tokens.js"
import { errorMessage, tokenMessage } from "../utils/messages.js"
import { loginValidation, registerValidation } from "../validations/auth.validation.js";

export const login = async (req, res) => {
    const { email, password } = req.body;
    const errors = loginValidation(req.body);

    if (errors) {
        return res.status(422).send(errors);
    }

    const user = await User.findOne({email});

    if(!user) {
        return res.status(401).send(errorMessage("email", "Endereço de e-mail ou senha incorretos"));
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
        return res.status(401).send(errorMessage("email", "Endereço de e-mail ou senha incorretos"));
    }

    let token = createToken({id: user._id});

    res.send(tokenMessage('Usuário Autenticado', user.email, token));
}

export const register = async (req, res) => {
    const { email, password } = req.body;
    const errors = registerValidation(req.body);

    if (errors) {
        return res.status(422).send(errors);
    }

    const hashPassword = await bcrypt.hash(password, 8);

    User.create({
        email,
        password: hashPassword
    }, (error, user) => {
        if(error) {
            if (error.code === 11000) {
                return res.status(400).send(errorMessage("email", "Usuário já cadastrado"));
            }
        }

        let token = createToken({id: user._id});

        res.send(tokenMessage('Usuário Registrado', user.email, token));
    });
}

