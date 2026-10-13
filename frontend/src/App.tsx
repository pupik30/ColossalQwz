import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Home from './Pages/Home/home';
import Quote from './Pages/Quote/quote';
import Contact from './Pages/Contact/contact';
import NotFound from './Components/NotFound/not-found';
import Faq from './Pages/Home/FAQ/faq';
import Pricing from './Pages/Pricing/pricing';
import Blog from './Pages/Blog/blog';
import BlogPost from './Pages/BlogPost/blog-post';
import Terms from './Pages/Terms/terms';
import Projects from './Pages/Projects/projects';
import ProjectDetail from './Pages/ProjectDetail/project-detail';
import About from './Pages/About/about';
import HowWeWork from './Pages/HowWeWork/how-we-work';
import Services from './Pages/Services/services';
import ServiceDetail from './Pages/ServiceDetail/service-detail';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="/quote" element={<Quote />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="pricing" element={<Pricing />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<BlogPost />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:id" element={<ProjectDetail />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/work" element={<HowWeWork />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/:id" element={<ServiceDetail />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
