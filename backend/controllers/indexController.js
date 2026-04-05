import { prisma } from "../config/prismaClient";
import { verifyToken } from "../middleware/verifyToken";

// TODO: add filters
async function getPosts(req, res) {
    try {
        const posts = await prisma.post.findMany({
            where: {
                published: true,
            },
            include: {
                author: true,
                comments: {
                    include: {
                        user: true,
                    }
                }
            }
        });

        return res.status(200).json({
            message: "Successfully retrieved posts.",
            posts,
        });
    } catch (err) {
        console.error("Error in getPosts:", err.message, err.stack);
        return res.status(500).json({
            error: "Database query failed for getPosts.",
        });
    } 
}

async function createPost(req, res) {
    try {
        const {title, content, published} = req.body;
        const post = await prisma.post.create({
            data: {
                title,
                content,
                published
            }
        });

        return res.status(200).json({
            message: "Successfully created post.",
            post,
        });
    } catch (err) {
        console.error("Error in createPost:", err.message, err.stack);
        return res.status(500).json({
            error: "Database query failed for createPost.",
        });
    }
}

async function updatePost(req, res) {
    try {
        const {title, content, published} = req.body;
        const { id } = req.params; 
        const post = await prisma.post.update({
            where: {
                id,
            },
            data: {
                title,
                content,
                published,
                updatedAt: new Date()
            }
        });

        return res.status(200).json({
            message: "Successfully updated post.",
            post,
        });
    } catch (err) {
        console.error("Error in updatePost:", err.message, err.stack);
        return res.status(500).json({
            error: "Database query failed for updatePost.",
        });
    }
}

export const indexController = {
    getPosts,
    createPost,
    updatePost
};