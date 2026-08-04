export function success(res, message, data = {}) {

    return res.json({

        success: true,

        message,

        data

    });

}

export function error(res, message, code = 400) {

    return res.status(code).json({

        success: false,

        message

    });

}
