
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

app.get("/movie/search", async (req, res) => {
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/search/movie?query${req.query.search}=&include_adult=false&language=en-US&page=1`,
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${api_key}`
        }
    };

    axios
        .request(options)
        .then(response => res.json(response.data))
        .catch(err => console.error(err));
})


//start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
