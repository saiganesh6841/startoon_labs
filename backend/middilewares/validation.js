


const validateRegistration = (req, res, next) => {
    const { name, email, password, gender,roleType } = req.body;

    // Check if all required fields are provided
    if (!name) {
        return res.status(400).json({ status: "failed", error: "name is Required" });
    }
    if(!email){
        return res.status(400).json({ status: "failed", error: "email is Required" });
    }
    if(!password){
        return res.status(400).json({ status: "failed", error: "password is Required" });
    }

    // Check if the password meets minimum length requirement
    if (password.length < 8) {
        return res.status(400).json({ status: "failed", error: "Password must be at least 8 characters long" });
    }

    // Email validation using regular expression
    const emailRegex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[c][o][m]$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ status: "failed", error: "Invalid email format" });
    }
    

    // // Gender validation
    // const types = ['male', 'female'];
    // if (gender && !allowedGenders.includes(gender.toLowerCase())) {
    //     return res.status(400).json({ status: "failed", error: "Invalid gender value" });
    // }

    // If all validations pass, move to the next middleware
    next();
};

module.exports =  validateRegistration ;