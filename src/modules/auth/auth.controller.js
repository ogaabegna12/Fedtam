import * as authService from "./auth.service.js";

export async function register(req, res) {

    const result = await authService.register(req.body);

    return res.status(result.status).json(result);

}

export async function verifyOtp(req, res) {

    const result = await authService.verifyOtp(req.body);

    return res.status(result.status).json(result);

}

export async function login(req, res) {

    const result = await authService.login(req.body);

    return res.status(result.status).json(result);

}

export async function logout(req, res) {

    const result = await authService.logout(req.user);

    return res.status(result.status).json(result);

}

export async function me(req, res) {

    const result = await authService.me(req.user);

    return res.status(result.status).json(result);

}
