import React from "react";
import { useState } from "react";
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

// @ts-ignore — добавьте эту строку, если TypeScript ругается на отсутствие типов для file.js

import { Photo } from "../../../file.ts";

export default function Header(): React.JSX.Element {
<<<<<<< HEAD
return (
<>
<section className={styles.SectionBase}>
asdasd
</section>
</>
);
}
=======
    return(
<>
<header>

    <div className={styles.headerBlockTop}>
        <div className={styles.headerJC}>
            <div className={styles.logoPhoto}>
                <img src={Photo.Logo} alt="" />
                <p>Collosal.</p>
            </div>
            <nav className={styles.nav}>
                    <NavLink to={"MainPage"}  className={({ isActive }) => (isActive ? `${styles.active} ${styles.activee}` : "")}>Services</NavLink>
                    <NavLink to={"1"} className={({isActive}) => (isActive ? `${styles.active} ${styles.active}`: "")}>How We Work</NavLink>
                    <NavLink to={"2"} className={({isActive}) => (isActive ? `${styles.active} ${styles.active}`: "")}>Projects</NavLink>
                    <NavLink to={"3"} className={({isActive}) => (isActive ? `${styles.active} ${styles.active}`: "")}>About</NavLink>

            </nav> 
            <button className={styles.ConectUs}>Contact</button>
        </div>
    </div>
</header>
</>
)
}
>>>>>>> 85f8279 (Добавил файлы проекта)
