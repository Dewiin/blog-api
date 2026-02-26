import express from "express";
// import passport from "passport";
import cors from "cors"
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// routers
import { indexRouter } from "./routes/indexRouter.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(cors({
    origin: (origin, ctx) => {
        const allowed = [
            "http://127.0.0.1:5173", 
            "http://localhost:5173"
        ];
        if (!origin || allowed.includes(origin)) {
            ctx(null, true);
        } else {
            ctx(new Error("Not allowed by CORS: ", origin));
        }
    },
    credentials: true,
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api", indexRouter);
app.use((req, res) => {
	res.status(404).json({ error: "Not Found" });
});

// Run
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on Port ${PORT}!`));