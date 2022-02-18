import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Footer from './components/footer'
import Navbar from './components/navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faSortDown,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'

const Home: NextPage = () => {

  return (
    <div className={styles.layout}>
      <Head>
        <title>My Ride</title>
      </Head>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.section1}>
          <div className={styles.section1_content}>
            <div className={styles.section1_content_image}>
              <Image
                src={"/Frame675.png"}
                alt=""
                width={'100%'}
                height={'100%'}
                layout="responsive"
                objectFit='contain'
              />
            </div>
            <div className={styles.section1_content_booking}>
              <div className={styles.section1_content_booking_header}>
                <p style={{ color: "white", fontSize: "26px", fontWeight: "400", lineHeight: "30px" }}>NEED A RIDE?</p>
                <p style={{ color: "white", fontSize: "50px", fontWeight: "700", lineHeight: "60px" }}>Book with <span style={{ fontWeight: "500", fontStyle: "italic", color: "#FBA403" }}>myRIDE</span> now!</p>
              </div>
              <div className={styles.section1_content_booking_fill}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <p style={{ color: "white", fontSize: "24px", fontWeight: "700", lineHeight: "32px" }}>Find a ride now</p>
                  <div style={{ display: "flex", cursor: "pointer" }}>
                    <p style={{ color: "white", fontSize: "14px", fontWeight: "400", lineHeight: "20px" }}>Ride now</p>
                    <FontAwesomeIcon icon={faSortDown} style={{ width: "15px", height: "15px", marginLeft: "10px", color: "white" }} />
                  </div>
                </div>
                <div style={{ marginTop: "5px", display: "flex", flexDirection: "column" }}>
                  <div className={styles.section1_content_booking_fill_input}>
                    <p >Your Pickup</p>
                    <input type="text" placeholder='Current Location' id='current' />
                    <FontAwesomeIcon icon={faXmark} style={{ width: "18px", height: "18px", position: "absolute", color: "white", transform: "translateX(480px) translateY(-35px)" }} />
                    <FontAwesomeIcon icon={faSortDown} style={{ width: "18px", height: "18px", position: "absolute", transform: "translateX(510px) translateY(-40px)", color: "white" }} />
                  </div>
                  <div className={styles.section1_content_booking_fill_input}>
                    <p>Your Destination</p>
                    <input type="text" placeholder='Target Location' id='target' />
                    <FontAwesomeIcon icon={faXmark} style={{ width: "18px", height: "18px", position: "absolute", color: "white", transform: "translateX(480px) translateY(-35px)" }} />
                    <FontAwesomeIcon icon={faSortDown} style={{ width: "18px", height: "18px", position: "absolute", transform: "translateX(510px) translateY(-40px)", color: "white" }} />
                  </div>
                </div>
                <div style={{ height: "55px", marginTop: "15px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div className={styles.section1_content_booking_fill_button}>
                    <FontAwesomeIcon icon={faSearch} style={{ width: "18px", height: "18px" }} />
                    <button>FIND A DRIVER</button>
                  </div>
                  <p style={{ fontSize: "14px", fontWeight: "500", lineHeight: "16px", color: "#FBA403", cursor: "pointer" }}>MORE OPTIONS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.section2_sub1}>
            <div className={styles.section2_sub1_header}>
              <p style={{ fontSize: "26px", fontWeight: "400", lineHeight: "30px", color: "#FBA403" }}>THE BEST OUT THERE</p>
              <p style={{ marginTop: "10px", fontSize: "45px", fontWeight: "700", lineHeight: "50px" }}>Why choose myRide?</p>
            </div>
            <div className={styles.section2_sub1_content}>
              <div className={styles.section2_sub1_content_part1}>
                <div style={{ width: "200px" }}>
                  <Image
                    src={"/Frame676.png"}
                    alt=""
                    width={'100%'}
                    height={'100%'}
                    layout="responsive"
                    objectFit='contain'
                  />
                </div>
                <p style={{ fontSize: "30px", fontWeight: "500", lineHeight: "40px" }}>Our rides are everywhere</p>
                <p style={{ fontSize: "16px", fontWeight: "400", lineHeight: "26px", color: "#B3B3B3" }}>We have a wide range of coverage. We are available in multiple cities in the US and in Asia.</p>
              </div>
              <div className={styles.section2_sub1_content_part2}>
                <div style={{ width: "200px" }}>
                  <Image
                    src={"/Frame677.png"}
                    alt=""
                    width={'100%'}
                    height={'100%'}
                    layout="responsive"
                    objectFit='contain'
                  />
                </div>
                <p style={{ fontSize: "30px", fontWeight: "500", lineHeight: "40px" }}>Fast and easy booking</p>
                <p style={{ fontSize: "16px", fontWeight: "400", lineHeight: "26px", color: "#B3B3B3" }}>Book by going to myRide.com website or download our mobile app for iOS and Android.</p>
              </div>
              <div className={styles.section2_sub1_content_part3}>
                <div style={{ width: "200px" }}>
                  <Image
                    src={"/Frame678.png"}
                    alt=""
                    width={'100%'}
                    height={'100%'}
                    layout="responsive"
                    objectFit='contain'
                  />
                </div>
                <p style={{ fontSize: "30px", fontWeight: "500", lineHeight: "40px" }}>Your wallet will thank you</p>
                <p style={{ fontSize: "16px", fontWeight: "400", lineHeight: "26px", color: "#B3B3B3" }}>We have the lowest fares available now and you can make it even lower by using myRide points.</p>
              </div>
            </div>
          </div>
          <div className={styles.section2_sub2}>
            <div className={styles.section2_sub2_header}>
              <p style={{ fontSize: "26px", fontWeight: "400", lineHeight: "30px", color: "#FBA403" }}>WHY SHOULD YOU RIDE WITH US?</p>
              <p style={{ marginTop: "10px", fontSize: "45px", fontWeight: "700", lineHeight: "50px" }}>Best in class rides</p>
            </div>
            <div className={styles.section2_sub2_content}>
              <div className={styles.section2_sub2_content_part1}>
                <div>
                  <Image
                    src={"/Car1.png"}
                    alt=""
                    width={"300px"}
                    height={"200px"}
                  />
                  <div style={{ padding: "15px" }}>
                    <p style={{ fontWeight: "500" }}>Basic</p>
                    <p style={{ fontWeight: "400", color: "#B3B3B3" }}>The best balance of price and comfort. You will not go wrong with our basic rides.</p>
                  </div>
                </div>
                <p style={{ padding: "15px", display: "flex", justifyContent: "flex-end", color: "#FBA403" }}><a href="">LEARN MORE</a></p>
              </div>
              <div className={styles.section2_sub2_content_part2}>
                <div>
                  <Image
                    src={"/Car2.png"}
                    alt=""
                    width={"300px"}
                    height={"200px"}
                  />
                  <div style={{ padding: "15px" }}>
                    <p style={{ fontWeight: "500" }}>Comfort</p>
                    <p style={{ fontWeight: "400", color: "#B3B3B3" }}>If comfort is your priority, this is the ride for you. It’s spacious and packed with features.</p>
                  </div>
                </div>
                <p style={{ padding: "15px", display: "flex", justifyContent: "flex-end", color: "#FBA403" }}><a href="">LEARN MORE</a></p>
              </div>
              <div className={styles.section2_sub2_content_part3}>
                <div>
                  <Image
                    src={"/Car3.png"}
                    alt=""
                    width={"300px"}
                    height={"200px"}
                  />
                  <div style={{ padding: "15px" }}>
                    <p style={{ fontWeight: "500" }}>Business</p>
                    <p style={{ fontWeight: "400", color: "#B3B3B3" }}>Do you want to travel around the city in style? Make sure to select or business class rides.</p>
                  </div>
                </div>
                <p style={{ padding: "15px", display: "flex", justifyContent: "flex-end", color: "#FBA403" }}><a href="">LEARN MORE</a></p>
              </div>
              <div className={styles.section2_sub2_content_part4}>
                <div>
                  <Image
                    src={"/Car4.png"}
                    alt=""
                    width={"300px"}
                    height={"200px"}
                  />
                  <div style={{ padding: "15px" }}>
                    <p style={{ fontWeight: "500" }}>Deluxe</p>
                    <p style={{ fontWeight: "400", color: "#B3B3B3" }}>The best ride for luxury and comfort. No compromises here. You’ll surely get what you pay for.</p>
                  </div>
                </div>
                <p style={{ padding: "15px", display: "flex", justifyContent: "flex-end", color: "#FBA403" }}><a href="">LEARN MORE</a></p>
              </div>
            </div>
          </div>
          <div className={styles.section2_sub3}>
            <Image
              src={"/Car_icon.png"}
              alt=""
              width={"280px"}
              height={"190px"}
              priority
            />
            <div className={styles.section2_sub3_content}>
              <p style={{ fontSize: "32px", fontWeight: "700", lineHeight: "40px" }}>Become a Driver</p>
              <p style={{ fontSize: "16px", fontWeight: "400", lineHeight: "26px", color: "#B3B3B3" }}>Be a part of a growing community of myRiders. Register as a driver and don’t forget to register your car as well.</p>
            </div>
            <button>REGISTER NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
