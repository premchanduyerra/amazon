import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img
                    className="home_image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt="" />

                <div className="home_row">
                    <Product
                        id="12350"
                        title="2 x Replacement Inner Speaker Built-in Speaker Loudspeaker Audio Louder Sound Speaker for Nintendo Switch NS Console"
                        image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
                        price={121}
                        rating={4}
                    />
                    <Product
                        id="12351"
                        title="Divoom Tivoo Max Smart Portable Bluetooth LED Speaker with APP-Controlled Pixel Art Animation, Notification and Build- in Clock/Alarm, 6.42X7.26X3.39 inch (Black)"
                        image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/merch/2019/CXL-969/CSL-969_ViCC_V1_640x300.jpg"
                        price={211}
                        rating={3}
                    />
                    <Product
                        id="12352"
                        title="Treehut Men's Walnut Wooden Watch with All Walnut Wood Strap Quartz Analog Japanese Movement Watch"
                        image="https://d3rlgjrg24xpvv.cloudfront.net/wp-content/uploads/2017/12/26095141/Amazon-A-Product-Image-Service-021.jpg"
                        price={300}
                        rating={5}
                    />
                </div>
                <div className="home_row">
                    <Product
                        id="12344"
                        title="this is laptoddddddddddddddddp"
                        image="https://images-na.ssl-images-amazon.com/images/I/71jztV8b7eL._SX466_.jpg"
                        price={19}
                        rating={4}

                    />
                    <Product
                        id="12345"
                        title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
                        image="https://images-na.ssl-images-amazon.com/images/I/41axyW2jpfL._AC_SY400_.jpg"
                        price={111}
                        rating={3}
                    />



                </div>
                <div className="home_row">
                    <Product
                        id="12346"
                        title="Marvel's Avengers for PlayStation 4"
                        image="https://images-na.ssl-images-amazon.com/images/I/81DugevkxJL._SX385_.jpg"
                        price={181}
                        rating={3}
                    />
                    <Product
                        id="12347"
                        title="Nintendo Switch 32GB Console Video Games w/ 32GB"
                        image="https://images-na.ssl-images-amazon.com/images/I/417kf2GJBuL._AC_SY400_.jpg"
                        price={101}
                        rating={5}
                    />
                    <Product
                        id="12348"
                        title="Marvel's Avengers for PlayStation 4"
                        image="https://images-na.ssl-images-amazon.com/images/I/81DugevkxJL._SX385_.jpg"
                        price={11}
                        rating={3}
                    />
                </div>
                <div className="home_row">
                    <Product
                        id="12349"
                        title="Marvel's Avengers for PlayStation 4"
                        image="https://images-na.ssl-images-amazon.com/images/I/81DugevkxJL._SX385_.jpg"
                        price={21}
                        rating={3}
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
