import React, { FC } from 'react';
import styles from './sideNav.module.scss'
import assets from '@/assets'
import Link from 'next/link'
interface Props {
    darkMode: boolean
}

const index: FC<Props> = ({ darkMode }) => {

    return (
        <div className={styles.sideNav}>
            <Link href='/home'>
                <span className={styles.entry}>
                    <img src={!darkMode ? assets.navIcon1 : assets.navIcon1N} alt="" />
                    <p>Create Presale</p>
                </span>
            </Link>
            <Link href='/manage'>
                <span className={styles.entry}>
                    <img src={!darkMode ? assets.navIcon2 : assets.navIcon2N} alt="" />
                    <p>Manage Presale</p>
                </span>
            </Link>
            <Link  href='/list'>
                <span className={styles.entry}>
                    <img src={!darkMode ? assets.navIcon3 : assets.navIcon3N} alt="" />
                    <p>List Presale</p>
                </span>
            </Link>
        </div>
    );
};

export default index;