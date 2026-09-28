// Исправляем путь импорта: в Vite пути отсчитываются относительно текущего файла.
// Если этот файл лежит в корне src, то путь до assets будет './assets/BG.png'
import BG from './assets/BG.png'; Logo
import Logo from './assets/Logo.png'; 

// В TS объект можно экспортировать напрямую с автовыведением типов
export const Photo = {
    BG: BG,
    Logo:Logo,
};
