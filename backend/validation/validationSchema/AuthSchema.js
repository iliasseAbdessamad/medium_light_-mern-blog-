const authSchema = {
    fullname: {
        required: {
            value: true,
            error_msg: "fullname is required"
        },
    },
    email: {
        required: {
            value: true,
            error_msg: "email is required"
        },
        email: {
            value: true,
            error_msg: "invalid email address"
        },
        unique: {
            value: true,
            error_msg: "email address already exists"
        }
    },
    password: {
        required: {
            value: true,
            error_msg: "password is required"
        },
        minLen: {
            value: 6,
            error_msg: "password must contains at least 6 characters"
        }
    }
}

export default authSchema