import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

export function generateAccessToken(user) {
    return jwt.sign(
        {
            id: user.id,
            phone: user.phone,
            role: user.role || "customer"
        },
        SECRET,
        {
            expiresIn: "15m"
        }
    );
}

export function generateRefreshToken(user) {
    return jwt.sign(
        {
            id: user.id
        },
        SECRET,
        {
            expiresIn: "7d"
        }
    );
}

export function verifyToken(token) {
    return jwt.verify(token, SECRET);
}
