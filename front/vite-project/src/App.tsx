import { useState } from 'react'

import React, { StrictMode,} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

<<<<<<< HEAD
// import Header from './Page/Layouts/Header/Header.js'
// import Footer from './Page/Layouts/Footer/Footer.js'
// import MainPage from './Page/MainPage/MainPage.js'
=======
import Header from './Page/Layouts/Header/Header.js'
import Footer from './Page/Layouts/Footer/Footer.js'
import MainPage from './Page/MainPage/MainPage.js'
>>>>>>> 85f8279 (Добавил файлы проекта)


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StrictMode>
        <BrowserRouter>
          <Header/>
            <Routes>
                <Route path='/' index element = {<MainPage/>}/>
                <Route path='MainPage' element={<MainPage/>}/>
            </Routes>  
          <Footer />
        </BrowserRouter>
    </StrictMode>,
    </>
  )
}

export default App