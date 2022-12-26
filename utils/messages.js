export const errorMessage = (field, message) => {
    return {
        [field]: message,
    }
};

export const tokenMessage = (message, email, token) => {
    return {
        "message": message,
        "user": {
            "email": email
        },
        "token": token
    }
};
