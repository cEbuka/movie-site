import { useEffect } from "react";
import useMovieData from "../hooks/useMovieData"


const BackDropChanger = () => {
    const { backDropPath } = useMovieData()
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % backDropPath.length);
        }, 30000);
        return () => clearInterval(interval);
    }, [currentIndex,backDropPath])
    return currentIndex
}

export default BackDropChanger