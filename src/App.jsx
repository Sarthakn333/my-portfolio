
import AboutMeMain from './components/AboutMeSection/AboutMeMain'
import ContactMeMain from './components/contactMeSection/ContactMeMain'
import ExperienceMain from './components/experienceSection/ExperienceMain'
import FooterMain from './components/footer/FooterMain'
// import HelperSection from './components/helperSection/HelperSection'
import HeroGradient from './components/heroSection/HeroGradient'
import HeroMain from './components/heroSection/HeroMain'
import SubHeroMain from './components/heroSection/SubHeroMain'
import NavbarMain from './components/navbar/NavbarMain'
import ProjectsMain from './components/projectsSection/ProjectsMain'
import SkillsMain from './components/skillsSection/SkillsMain'
import SubSkills from './components/skillsSection/SubSkills'

function App() {
  return (
   <main className="font-special">
    <NavbarMain/>
    <HeroMain />
    <HeroGradient />
    <SubHeroMain/>
    <AboutMeMain/>
    <SkillsMain />
    <SubSkills />
    <ExperienceMain />
    <ProjectsMain/>
    <ContactMeMain/>
    <FooterMain/>
    
   </main>
  )
}

export default App
