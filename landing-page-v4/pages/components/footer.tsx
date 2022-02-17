import styles from '../../styles/components/Footer.module.scss';
import Image from 'next/image';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_profile}>
                <div className={styles.footer_profile_icon} style={{ width: "100px" }}>
                    <Image
                        src={"/MyRide_icon.png"}
                        alt=""
                        width={"100%"}
                        height={"100%"}
                        layout="responsive"
                        objectFit='contain'
                    />
                </div>
                <p>MyRide Inc., 2nd Floor, New York, NY 10016</p>
                <div className={styles.footer_profile_socialmedia}>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                </div>
            </div>
            <ul>
                <li>Company</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>How we work</li>
            </ul>
            <ul>
                <li>Support</li>
                <li>FAQ</li>
                <li>US Office</li>
                <li>Asia Office</li>
                <li>Help Center</li>
            </ul>
            <ul>
                <li>More</li>
                <li>Become a partner</li>
                <li>Partner Support</li>
                <li>Mobile app links</li>
            </ul>
        </div>
    )
}