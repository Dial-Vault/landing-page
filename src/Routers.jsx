import { Route, Routes } from 'react-router-dom';

import Home1 from './pages/homePages/Home1';

import AboutUsPage from './pages/innerPages/AboutUsPage';
import AboutUs2Page from './pages/innerPages/AboutUs2Page';
import TeamPage from './pages/innerPages/TeamPage';
import Team2Page from './pages/innerPages/Team2Page';
import TeamDetailsPage from './pages/innerPages/TeamDetailsPage';
import PricingPage from './pages/innerPages/PricingPage';
import FaqPage from './pages/innerPages/FaqPage';
import ContactUsPage from './pages/innerPages/ContactUsPage';

import ProjectPage from './pages/projectPages/ProjectPage';
import Project2Page from './pages/projectPages/Project2Page';
import Project3Page from './pages/projectPages/Project3Page';
import ProjectDetailsPage from './pages/projectPages/ProjectDetailsPage';

import ServicesPage from './pages/servicePages/ServicesPage';
import Services2Page from './pages/servicePages/Services2Page';
import Services3Page from './pages/servicePages/Services3Page';
import ServicesDetailsPage from './pages/servicePages/ServicesDetailsPage';
import BlogWithSidebarPage from './pages/blogPages/BlogWithSidebarPage';
import BlogSingleWithSidebarPage from './pages/blogPages/BlogSingleWithSidebarPage';
import NotFoundPage from './pages/innerPages/NotFoundPage';

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home1 />}></Route>

                <Route path='/about-us' element={<AboutUsPage />}></Route>
                <Route path='/about-us-2' element={<AboutUs2Page />}></Route>
                <Route path='/team' element={<TeamPage />}></Route>
                <Route path='/team-2' element={<Team2Page />}></Route>
                <Route path='/team-details/:id' element={<TeamDetailsPage />}></Route>
                <Route path='/pricing' element={<PricingPage />}></Route>
                <Route path='/faq' element={<FaqPage />}></Route>
                <Route path='/contact-us' element={<ContactUsPage />}></Route>

                <Route path='/projects' element={<ProjectPage />}></Route>
                <Route path='/project-details/:id' element={<ProjectDetailsPage />}></Route>
                <Route path="/projects/:slug" element={<ProjectDetailsPage />} />


                <Route path='/services' element={< ServicesPage />}></Route>

                <Route path='/services/:id' element={<ServicesDetailsPage />}></Route>
                <Route path='/blogs' element={<BlogWithSidebarPage />}></Route>
                <Route path='/blogs:page?' element={<BlogWithSidebarPage />}></Route>
                <Route path='/blog/:slug' element={<BlogSingleWithSidebarPage />}></Route>

                <Route path='*' element={<NotFoundPage />}></Route>
            </Routes>
        </>
    );
};

export default Routers;