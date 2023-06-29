//OBSOLETE: DELETE

//TODO: udpate anchors so that home goes to the navebar and not the hero.
import Hero from "../Hero/Hero";
import ContentPage from "../ContentPage/ContentPage";
import "./ProjectPage.styles.css";
import { HeroProps } from "../../../types/AppTypes";
import ProjectOverview from "./components/ProjectOverview/ProjectOverview";
import ProjectDemo from "./components/ProjectDemo/ProjectDemo";

//This component is a modified version of the ContentPage component for Project Pages. Primary difference is pre-defined heroProps
const ProjectPage = ({ title = "Vermelho Game" }) => {
  const heroProps: HeroProps = {
    size: "is-large",
    background: "url(../img/vermelho.png)",
    navBarOffset: true,
  };

  const sections = [
    { label: "Home", link: "#home", content: <Hero {...heroProps} /> },
    {
      label: "Project Overview",
      link: "#overview",
      content: <ProjectOverview title={title} />,
    },
    {
      label: "Demo",
      link: "#projectDemo",
      content: (
        <ProjectDemo
          title={title}
          srcUrl="https://elegant-sprite-9896e5.netlify.app/"
        />
      ),
    },
  ];

  return <ContentPage sections={sections} />;
};

export default ProjectPage;
