
import Profile from "../models/profile.model.js";
import { updateProfileValidation } from "../validations/profile.validation.js";
import { deleteFile, createUrlFile } from '../utils/uploads.js';

const getProfileById = async (req, res) => {
    let profile = await Profile.findById(req.params.id)
        .populate({ path: 'education' })
        .populate({ path: 'experiences' })
        .populate({ path: 'interests' })
        .populate({ path: 'sourcesKnowledge' })
        .populate({ path: 'skills', populate: { path: 'categorySkill' } })
        .populate({ path: 'knowledge', populate: { path: 'categoryKnowledge' } })
        .populate({ path: 'messages'});

    if (!profile) {
        return res.status(404).send({ message: "Perfil não encontrado" });
    }

    return res.status(200).send(profile);
};

const updateProfile = async (req, res) => {
    req.body.cv = req.file;
    req.body.cv.url = createUrlFile(req);

    const errors = updateProfileValidation(req.body);

    if (errors) {
        return res.status(422).send(errors);
    }

    const file = await Profile.findById(req.params.id).select('-_id cv.path');

    deleteFile(file.cv.path);

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
