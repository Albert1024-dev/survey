const authenticateToken = (req, res, next) => {
    // Get token from the request headers
    const token = req.get('Authorization');
    const decoded = token ? JSON.parse(token) : {};

    if (!decoded) {
        return res.status(401).json({ message: 'Access token is missing or invalid' });
    }
    
    console.log(decoded, typeof decoded);
    if (decoded['role'] === 'admin') {
        next();
    } else {
        const result = { status: false, message: 'You can\'t access here!', type: 'error' };
        return res.json(result);
    }
};

module.exports = authenticateToken;