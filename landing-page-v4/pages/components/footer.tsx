import styles from '../../styles/components/Footer.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faWhatsapp,
    faInstagram,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {

    return (
        <div className={styles.footer}>
            <div className={styles.footer_profile}>
                <div className={styles.footer_profile_icon}>
                    <a href="">
                        <Image
                            src={"/MyRide_icon.png"}
                            alt=""
                            width={"120px"}
                            height={"60px"}
                            priority
                        />
                    </a>
                </div>
                <p style={{ marginTop: "16px", fontSize: "16px", fontWeight: "400", lineHeight: "24px", color: "#B3B3B3" }}>MyRide Inc., 2nd Floor, New York, NY 10016</p>
                <div className={styles.footer_profile_socialmedia}>
                    <FontAwesomeIcon icon={faWhatsapp} onClick={() => window.open('https://wa.me/+6282110797472', '_blank')} />
                    <FontAwesomeIcon icon={faInstagram} onClick={() => window.open('https://www.instagram.com/fatihmuhamadridho/', '_blank')} />
                    <FontAwesomeIcon icon={faLinkedin} onClick={() => window.open('https://www.linkedin.com/in/fatihmuhamadridho/', '_blank')} />
                </div>
            </div>
            <div className={styles.footer_detail}>
                <ul>
                    <li style={{ marginBottom: "20px", fontSize: "20px", fontWeight: "500", lineHeight: "27px" }}><a href="#">Company</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">How we work</a></li>
                </ul>
                <ul>
                    <li style={{ marginBottom: "20px", fontSize: "20px", fontWeight: "500", lineHeight: "27px" }}><a href="#">Support</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">US Office</a></li>
                    <li><a href="#">Asia Office</a></li>
                    <li><a href="#">Help Center</a></li>
                </ul>
                <ul>
                    <li style={{ marginBottom: "20px", fontSize: "20px", fontWeight: "500", lineHeight: "27px" }}><a href="#">More</a></li>
                    <li><a href="#">Become a partner</a></li>
                    <li><a href="#">Partner Support</a></li>
                    <li><a href="#">Mobile app links</a></li>
                </ul>
            </div>
        </div>
    )
}