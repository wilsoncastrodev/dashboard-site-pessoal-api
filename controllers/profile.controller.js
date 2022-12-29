
import Profile from "../models/profile.model.js";

const getProfileById = async (req, res) => {
    let profile = await Profile.findById(req.params.id).populate('interests');

    if (!profile) {
        return res.status(404).send({ message: "Perfil não encontrado" });
    }

    return res.status(200).send(profile);
};

export default {
    getProfileById,
}
