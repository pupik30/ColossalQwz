import React from "react";
import { useState } from "react";
import styles from './Footer.module.scss';
import { NavLink } from 'react-router-dom';

// @ts-ignore — добавьте эту строку, если TypeScript ругается на отсутствие типов для file.js

<<<<<<< HEAD
import { Photo } from "../../../file.js";

export default function Footer(): React.JSX.Element {
return (
<>
<section className={styles.SectionBase}>
asdasd
</section>
</>
);
}
=======
import { Photo } from "../../../file.ts";

export default function Footer(): React.JSX.Element {
    return(
<>
<p>fdsafd</p>
</>
)
}
>>>>>>> 85f8279 (Добавил файлы проекта)
