const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = new User({
            email,
            password: hashedPassword
        });

        await user.save();

        res.status(201).json({ status: false, message: "User registered successfully", type: 'error' });
    } catch (error) {
        res.status(500).json({ status: false, message: "Registration error", type: 'error', error });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

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
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ status: true, message: "Login successful", type: 'success', token });
    } catch (error) {
        res.status(500).json({ status: false, message: "Login error", type: 'error', error });
    }
};

exports.logout = (req, res) => {
    // JWT-based logout can be handled by expiring the token on the client side.
    res.status(200).json({ status: true, message: "Logout successful", type: 'success' });
};