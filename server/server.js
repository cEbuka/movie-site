
import "dotenv/config"
import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/movies", async (req, res) => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.API_KEY}`
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
});

//start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
