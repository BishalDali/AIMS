const read = async (SignUpSchema) => {
    const getAllSignupUsers = await SignUpSchema.find();
    return getAllSignupUsers;
};

module.exports = read;
