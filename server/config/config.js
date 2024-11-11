const config = {
    messages: {
        // Common messages
        createSuccess: 'Successfully Created!',
        updateSuccess: 'Successfully Updated!',
        deleteSuccess: 'Successfully Deleted!',
        foundError: 'Not Found current data',
        dealError: 'Dealing Error',
        isEmpty: 'Incorrect Input',

        // Authentication messages
        registerSuccess: "Register Success!",
        loginSuccess: "Login Success!",
        logoutSuccess: "Logout Success!",
        loginFailed: 'Login Failed!',
        registerFailed: 'Register Failed!',
    },

    types: {
        info: 'info',
        success: 'success',
        warning: 'warning',
        error: 'error',
    },

    admin: {
        email: "kapiltaku@survey.com",
        password: "Kapil&Taku123456.",
    },

    role: {
        admin: "admin",
        user: 'guest',
    },
};

module.exports = config;