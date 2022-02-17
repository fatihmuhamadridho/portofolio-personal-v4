import { NextPage } from "next";
import styles from '../styles/MobileApp.module.scss';
import Footer from "./components/footer";
import Navbar from "./components/navbar";

const MobileApp: NextPage = () => {
    return (
        <div className={styles.layout}>
            <Navbar />
            <div className={styles.container}>

            </div>
            <Footer />
        </div>
    )
}

export default MobileApp;