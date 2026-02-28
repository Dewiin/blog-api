import { prisma } from "../config/prismaClient";


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

        return res.json({
            status: 1,
            posts,
        });
    } catch {
        console.error("failed to fetch posts from server.");
        return res.json({
            status: 0,
            error: "failed to fetch posts from server.",
        });
    } 
}

export const indexController = {
    getPosts
};