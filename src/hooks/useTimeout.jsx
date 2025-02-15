import { useEffect, useState } from "react";
import useMovieData from "./useMovieData"


const useTimeout = () => {
    const { backDropPath } = useMovieData()
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (backDropPath.length === 0) return;
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % backDropPath.length);
        }, 10000);
        return () => clearInterval(interval);
    }, [currentIndex, backDropPath]);
    return {currentIndex}
}

export default useTimeout