import './App.css';
import Header from './components/Header/header';
import HeroSectionComp from './components/HeroSection/HeroSectionComp';
import Loader from './components/Loader/Loader';
import ScrollSection from './components/XScroll/ScrollSection';
import ProjectDetailsComp from './components/ProjectDetails/ProjectDetailsComp';
import ScrollReverse from './components/XScroll/ScrollReverse';
import HelloSection from './components/PersonalDetails/HelloSection';
import FooterSection from './components/Footer/Footer';

function App() {
  return (
    <>
      <Loader />
      <Header />
      <div id="home">
        <HeroSectionComp />
      </div>
      <ScrollSection />
      <div id="projects">
        <ProjectDetailsComp />
      </div>
      <ScrollReverse />
      <div id="contact">
        <HelloSection />
      </div>
      <FooterSection />
    </>
  );
}

export default App;
