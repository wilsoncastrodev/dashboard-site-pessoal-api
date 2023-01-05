import jwt from "jsonwebtoken";

export const createToken = (data, expire = '1d') => jwt.sign({ data }, process.env.JWT_SECRET, { expiresIn: expire });

export const verifyToken = token => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (e) {
        return null;
    }
};

