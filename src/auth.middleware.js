export default function authMiddleware(req, res, next) {

    const auth = req.headers.authorization;

    if (!auth) {

        return res.status(401).json({

            success: false,

            message: "Authorization token required"

        });

    }

    // JWT verification will be added in Sprint 2B

    req.user = {

        id: "demo-user"

    };

    next();

}
