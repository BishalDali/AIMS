const create = async (SignUpSchema, body) => {
    console.log(SignUpSchema, body);
    const newSignUp = new SignUpSchema(body);
    let createSignUp;
    try {
        createSignUp = await newSignUp.save();
        return { createSignUp: createSignUp };
    } catch (error) {
        console.log(error.message, 'errr');
        return { error: error.message };
    }
};

module.exports = create;
