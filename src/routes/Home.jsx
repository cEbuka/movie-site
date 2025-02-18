
import Footer from "../components/Footer"
import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const Home = () => {
    return (
        <Fragment>
            <Header />
            <Outlet />
            <Footer />
        </Fragment>
    )
}

export default Home