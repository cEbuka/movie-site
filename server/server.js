
import dotenv from "dotenv"
dotenv.config()
import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;
// eslint-disable-next-line no-undef
const api_key = process.env.API_KEY;

app.use(cors());
app.use(express.json());

app.get("/movie/week", async (req, res) => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}`
        );
        res.json(response.data);


    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
});

app.get("/?search", async (req, res) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${req.params}&page=1&include_adult=false`);
        res.json(response.data);
        console.log(req.params);
    }
    catch (error) {
        res.status(500).json({ error: error.toString() });
    }
})


//start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
