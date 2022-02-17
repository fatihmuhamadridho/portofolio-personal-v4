import styles from '../../styles/components/Navbar.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBell,
} from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router';

export default function Navbar() {
    const router = useRouter();

    return (
        <div className={styles.navbar}>
            <a className={styles.navbar_logo}>
                <Image
                    src={"/favicon.ico"}
                    alt=''
                    width={'100%'}
                    height={'50%'}
                />
            </a>
            <div className={styles.navbar_list}>
                <ul>
                    <li><a onClick={() => router.push('/')}>Home</a></li>
                    <li><a onClick={() => router.push('/')}>Getting a Taxi</a></li>
                    <li><a onClick={() => router.push('/mobileapp')}>Mobile App</a></li>
                    <li><a target={"_blank"} href="https://wa.me/+6282110797472" rel='noreferrer'>Contact Us</a></li>
                </ul>
            </div>
            <div className={styles.navbar_profile}>
                <div className={styles.navbar_profile_notif}>
                    <FontAwesomeIcon icon={faBell} style={{ width: "25px", height: "25px" }} />
                </div>
                <div className={styles.navbar_profile_image}>
                    <Image
                        src={"/Ellipse175.png"}
                        alt=""
                        width={'100%'}
                        height={'100%'}
                        objectFit='contain'
                    />
                </div>
            </div>
        </div>
    )
}