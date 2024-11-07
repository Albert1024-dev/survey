const User = require('../models/User');
const bcrypt = require('bcryptjs');
const config = require('../config/config');

exports.register = async (req, res) => {
    try {
        const { email, password, confirmPassword } = req.body;

        // Check for existing user
        if (await User.findOne({ email })) {
            return res.status(400).json({ status: false, message: "Email already registered", type: 'error' });
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({ status: false, message: "Passwords do not match", type: 'error' });
        }

        if (email === config.admin.email && password === config.admin.password) {
            const result = { status: false, message: 'Can\' resgister with current information.', type: 'warning' };
            return res.json(result);
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = new User({
            email,
            role: 'guest',
            password: hashedPassword
        });

        user
            .save()
            .then(() => {
                res.status(201).json({ status: true, message: "Registration successful", type: 'success' });
            });
    } catch (error) {
        res.status(500).json({ status: false, message: "Registration error", type: 'error', error });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (email === config.admin.email && password === config.admin.password) {
            // Admin user login
            const token = { userID: 'Kapil&Taku_Admin1234567890', role: 'admin' };
            return res.json({ status: true, message: 'Login Success', type: 'success', token });
        }

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ status: false, message: "Invalid email or password", type: 'error' });
        }

        // Validate password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ status: false, message: "Invalid email or password", type: 'error' });
        }

        // Generate JWT token
        const token = { userId: user._id, role: user.role };

        res.status(200).json({ status: true, message: "Login successful", type: 'success', token });
    } catch (error) {
        res.status(500).json({ status: false, message: "Login error", type: 'error', error });
    }
};

exports.logout = (req, res) => {
    // JWT-based logout can be handled by expiring the token on the client side.
    res.status(200).json({ status: true, message: "Logout successful", type: 'success' });
};