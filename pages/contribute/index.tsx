import { FC, useState } from 'react';
import Content from '../../components/Content';
import Nav from '@/components/Nav';
import SideNav from '@/components/SideNav';
import styles from "./contribute.module.scss"

const routes: string[] = [];

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

                        </div>
                        <div className={styles.center}>

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