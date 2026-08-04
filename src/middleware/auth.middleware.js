import { verifyToken } from "../utils/jwt.js";

export default function authMiddleware(req, res, next) {

    const authHeader = req.headers.authorization;

    if (!authHeader) {

        return res.status(401).json({

            success: false,

            message: "Authorization header missing"

        });

    }

    const token = authHeader.replace("Bearer ", "");

    try {

        const decoded = verifyToken(token);

        req.user = decoded;

        next();

    } catch {

        return res.status(401).json({

            success: false,

            message: "Invalid or expired token"

        });

    }

}
