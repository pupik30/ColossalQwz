import React from "react";
import { useState } from "react";
import styles from './MainPage.module.scss';
import { NavLink } from 'react-router-dom';

// @ts-ignore — добавьте эту строку, если TypeScript ругается на отсутствие типов для file.js



import { Photo } from "../../file.ts";

export default function MainPage(): React.JSX.Element {
return (
<>
<main>
<section className={styles.SectionBase}>
    <div className={styles.BaseMainDIv}>
        <p className={styles.MainDIvTxt_1}>CLIENT-DEVELOPMENT DRIVEN</p>
        <p className={styles.MainDIvTxt_2}>We Design. We Develop. We Ship. In The Same Day. </p>
        <p className={styles.MainDIvTxt_3}>We are committed to not making clients wait. We will deliver the work as quickly as possible. Even on the same day. Even so, we do not reduce the quality of our work.</p>
        <div className={styles.BaseMainBTN}>
            <button className={styles.BaseMainBTNLeft}>Send Quote</button>
            <button className={styles.BaseMainBTNRight}>Learn More</button>
        </div>
    </div>

</section>


<section className={styles.SectionCards}>
    {/* Сетка с 3 карточками */}
    <div className={styles.CardsGrid}>
        <div className={styles.Card}>
            <div className={styles.CardIcon}>🎨</div> {/* Или ваш тег картинки/иконки */}
            <h3 className={styles.CardTitle}>Design</h3>
            <p className={styles.CardText}>The project interface will be designed first, our favorite tool is Figma.</p>
        </div>

        <div className={styles.Card}>
            <div className={styles.CardIcon}>&lt;&gt;</div>
            <h3 className={styles.CardTitle}>Develop</h3>
            <p className={styles.CardText}>Transform design and write business logic here. Choose the technology you want.</p>
        </div>

        <div className={styles.Card}>
            <div className={styles.CardIcon}>📦</div>
            <h3 className={styles.CardTitle}>Ship</h3>
            <p className={styles.CardText}>After the work is complete, we will send the project and all its assets to you.</p>
        </div>
    </div>

    {/* Линия и блок с логотипами брендов */}
    <div className={styles.BrandsContainer}>
        <div className={styles.BrandLogo}>GitHub</div>
        <div className={styles.BrandLogo}>Forbes</div>
        <div className={styles.BrandLogo}>Google</div>
        <div className={styles.BrandLogo}>Microsoft</div>
        <div className={styles.BrandLogo}>facebook</div>
    </div>
</section>
</main>

</>
);
}
