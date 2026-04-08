import bcrypt from "bcryptjs";
import { prisma } from "../config/prismaClient";

async function signUp(req, res) {
    try {
        const { username, password } = req.body;
        const hashedPassword = bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                username, 
                password: hashedPassword,
                provider: "LOCAL"
            }
        })

    } catch (err) {
        console.error("Error in signUp:", err.message, err.stack);
        return res.status(500).json({
            error: "Database query failed for signUp.",
        });
    }
}

async function login(req, res) {

}

async function logout(req, res) {

}

export const authController = {
    signUp,
    login,
    logout
};