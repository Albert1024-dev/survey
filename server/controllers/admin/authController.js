const bcrypt = require('bcryptjs');
const config = require('../../config/config');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (email === config.admin.email && password === config.admin.password) {
            // Admin user login
            const token = { userID: config.admin.email, role: config.role.admin };
            return res.json({ status: true, message: config.messages.loginSuccess, type: config.types.success, token });
        }

        const result = { status: false, message: config.messages.loginFailed, type: config.types.error };
        return res.json(result);
    } catch (error) {
        res.status(500).json({ status: false, message: config.messages.loginFailed, type: config.types.error });
    }
};

exports.logout = (req, res) => {
    // JWT-based logout can be handled by expiring the token on the client side.
    res.status(200).json({ status: true, message: config.messages.logoutSuccess, type: config.types.success });
};