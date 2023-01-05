
import Profile from "../models/profile.model.js";
import { updateProfileValidation } from "../validations/profile.validation.js";

const getProfileById = async (req, res) => {
    let profile = await Profile.findById(req.params.id).populate('interests');

    if (!profile) {
        return res.status(404).send({ message: "Perfil não encontrado" });
    }

    return res.status(200).send(profile);
};

const updateProfile = async (req, res) => {
    req.body.cv = req.file;

    const errors = updateProfileValidation(req.body);

    if (errors) {
        return res.status(422).send(errors);
    }

    const profile = await Profile.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });

    return res.status(200).send({
        message: "Perfil atualizado com sucesso",
        profile
    });
};

export default {
    getProfileById,
    updateProfile
}
