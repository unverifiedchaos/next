import { FC, useState } from 'react';
import Content from '../../components/Content';
import Nav from '@/components/Nav';
import SideNav from '@/components/SideNav';
import styles from "./contribute.module.scss"
import assets from '@/assets';
const routes: string[] = [];

const Card: FC = () => {
    return (
        <div className={styles.card}>
            <span className={styles.head}>
                <h2>Jupiter Coin</h2>
                <img src={assets.bnbCircle} alt="" />
            </span>
            <span className={styles.stats}>
                <div className={styles.row}>
                    <span className={styles.stat}>
                        <p>Supply</p>
                        <h3>500</h3>
                        <img src={assets.bnbCircle} alt="" />
                    </span>
                    <span className={styles.stat}>
                        <p>Softcap</p>
                        <h3>500</h3>
                        <img src={assets.bnbCircle} alt="" />
                    </span>
                    <span className={styles.stat}>
                        <p>Hardcap</p>
                        <h3>500</h3>
                        <img src={assets.bnbCircle} alt="" />
                    </span>

                </div>
                <div className={styles.row}>
                    <span className={styles.stat}>
                        <p>Price</p>
                        <h3>500</h3>
                        <img src={assets.bnbCircle} alt="" />
                    </span>
                    <span className={styles.stat}>
                        <p>Min Contribution</p>
                        <h3>500</h3>
                        <img src={assets.bnbCircle} alt="" />
                    </span>
                    <span className={styles.stat}>
                        <p>Max Contribution</p>
                        <h3>500</h3>
                        <img src={assets.bnbCircle} alt="" />
                    </span>

                </div>
                <div className={styles.row}>
                    <span className={styles.stat}>
                        <p>Liqidity</p>
                        <h3>5000</h3>
                        <img src={assets.bnbCircle} alt="" />
                    </span>
                    <span className={styles.stat}>
                        <p>Tokens for liquidity</p>
                        <h3>5400</h3>
                        <img src={assets.bnbCircle} alt="" />
                    </span>
                    <span className={styles.stat}>
                        <p>Tokens for Presale</p>
                        <h3>2100</h3>
                        <img src={assets.bnbCircle} alt="" />
                    </span>
                </div>
                <div className={styles.row}>
                    <span className={styles.stat}>
                        <p>Presale Start time</p>
                        <h3 style={{ fontSize: "0.75rem", marginTop: "0.20rem" }}>15 sep 2021 at 11:00</h3>

                    </span>
                    <span className={styles.stat}>
                        <p>Presale end time</p>
                        <h3 style={{ fontSize: "0.75rem", marginTop: "0.20rem" }}>15 sep 2021 at 11:00</h3>

                    </span>
                    <span className={styles.stat}>
                        <p>Liquidity Date</p>
                        <h3 style={{ fontSize: "0.75rem", marginTop: "0.20rem" }}>15 sep 2021 at 11:00</h3>

                    </span>
                </div>
            </span>
            <div className={styles.desc}>
                <h3 className={styles.title}>Description</h3>
                <p className={styles.descText}>Polygon protocol and framework compatible blockchain protocol...... Read more</p>
            </div>
            <div className={styles.conSocials}>
                <div className={styles.row}>
                    <span className={styles.sHandle}>
                        <img src={assets.facebook} alt="" />
                        <p>Facebook</p>
                    </span>
                    <span className={styles.sHandle}>
                        <img src={assets.instagram} alt="" />
                        <p>Instagram</p>
                    </span>
                </div>
                <div className={styles.row}>
                    <span className={styles.sHandle}>
                        <img src={assets.twitter} alt="" />
                        <p>Twitter</p>
                    </span>
                    <span className={styles.sHandle}>
                        <img src={assets.telegram} alt="" />
                        <p>Telegram</p>
                    </span>
                </div>


            </div>
            <div className={styles.prog}>
                <h1>50/1000</h1>
                <span className={styles.progBar}>
                    <span></span>
                </span>
            </div>
            <div className={styles.action}>
                <p>Starts in 50:00</p>
                <button>Contribute</button>
            </div>
        </div>
    )
}

const Home: FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(!false);
    return (
        <>
            <Nav routes={routes} activeRoute={routes[0]} darkMode={darkMode} setDarkMode={setDarkMode} />
            <div>
                <Content>
                    <SideNav darkMode={darkMode}></SideNav>
                    <div className={styles.contribute}>
                        <div className={styles.left}>
                        <div className={styles.warning}>
                                <h3>Dexlot Warining</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis porro, voluptates quis cupiditate sequi nesciunt dolores molestias inventore a vel autem minima suscipit similique nulla.</p>
                            </div>
                            <div className={styles.warning}>
                                <h3>Dexlot Warining</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis porro, voluptates quis cupiditate sequi nesciunt dolores molestias inventore a vel autem minima suscipit similique nulla.</p>
                            </div>
                        </div>
                        <div className={styles.center}>
                            <Card />
                        </div>
                        <div className={styles.right}>

                        </div>
                    </div>
                </Content>
            </div>
        </>
    );
};

export default Home;