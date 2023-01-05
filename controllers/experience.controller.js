
import Experience from "../models/experience.model.js";
import Profile from "../models/profile.model.js";
import { experienceValidation } from "../validations/experience.validation.js";

const getAllExperience = async (req, res) => {
    let experience = await Experience.find();

    if (!experience.length) {
        return res.status(404).send({ message: "Não há nenhuma Experiência cadastrada." });
    }

    return res.status(200).send(experience);
};

const getExperienceById = async (req, res) => {
    let experience = await Experience.findById(req.params.id);

    if (!experience) {
        return res.status(404).send({ message: "Experiência não encontrada" });
    }

    return res.status(200).send(experience);
};

const createExperience = async (req, res) => {
    const errors = experienceValidation(req.body);

    if(errors) {
        return res.status(422).send(errors);
    }

    const experience = await Experience.create(req.body);

    await Profile.updateOne({ _id: req.body.profile._id }, { $push: {experiences: experience._id} })

    return res.status(200).send({
        message: "Experiência criada com sucesso",
        experience
    });
};

const updateExperience = async (req, res) => {
    const errors = experienceValidation(req.body);

    if (errors) {
        return res.status(422).send(errors);
    }

    const experience = await Experience.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });

    return res.status(200).send({
        message: "Experiência atualizada com sucesso",
        experience
    });
};

const deleteExperience = async (req, res) => {
    await Experience.findByIdAndDelete(req.params.id);

    return res.status(200).send({
        message: "Experiência excluída com sucesso",
    });
};

export default {
    getAllExperience,
    getExperienceById,
    createExperience,
    updateExperience,
    deleteExperience
}
