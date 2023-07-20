import ContentPage from "../../components/common/ContentPage/ContentPage";
import ProjectOverview from "../../components/common/ProjectPage.tsx/components/ProjectOverview/ProjectOverview";
import ProjectDemo from "../../components/common/ProjectPage.tsx/components/ProjectDemo/ProjectDemo";
import Hero from "../../components/common/Hero/Hero";
import { HeroProps } from "../../types/AppTypes";

const Vermelho = () => {
  const title = "Verhmelho Game";

  //Default Hero Props for all Project Pages
  const heroProps: HeroProps = {
    size: "is-large",
    background: "url(../img/vermelho.png)",
    navBarOffset: true,
  };

  //Link to Demo if applicable
  const demoUrl = "https://elegant-sprite-9896e5.netlify.app/";

  //Link to gallery if applicable
  // const galleryUrl = "";

  //Project overview/description paragraphs
  const overviewText = (
    <p>
      The Vermelho Game Project is a web based implementation of the popular
      board game Azul. The project was a self directed capstone project after
      completing my React coursework.
      <br />
      <br />
      The primary goals for the project were to build a more involved
      application within React, showcase completed work, and practice
      Typescript.
      <br />
      <br />
      The project utilizes vanilla CSS for all styling and game assests and was
      built within the React framework utilizing Typescript.
      <br />
      <br />
      All code for this project was written from scratch.
    </p>
  );

  const projectLinks = [
    {
      text: "GitHub Repo",
      url: "https://github.com/danieljwiest/intro-to-webdev-v3/tree/2ce765baee80b58464ec5faaad9fb31feac5b49b/calculator",
    },
    {
      text: "Frontend Masters Project Overview",
      url: "https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/putting-it-all-together/project",
    },
  ];

  //Project Goals. Array of bullet points.
  const goalsText = [
    "Complete a full project from scratch using React and Typescript",
    "Explore more complicated state management in react without utilizing Context",
    "Attempt graphic design utilizing vanilla CSS & explore use of color palletes",
    "FUTURE GOAL: Develop a game server and implement multi-user game play with authentication",
    "FUTURE GOAL: Refactor the primary reducer function to reduce file size and improve readability",
  ];

  //List of technologies used (JS, React, etc). Array of bullet points.
  const techUsedText = ["JavaScript", "React", "TypeScript", "CSS"];

  const hurdlesText = [
    "Managing State accross multiple components",
    "Structuring State",
    "Mitigating errors due to batching of sequential state changes",
  ];

  const sections = [
    { label: "Home", link: "#home", content: <Hero {...heroProps} /> },
    {
      label: "Project Overview",
      link: "#overview",
      content: (
        <ProjectOverview
          title={title}
          overview={overviewText}
          goals={goalsText}
          techUsed={techUsedText}
          hurdles={hurdlesText}
          projectLinks={projectLinks}
        />
      ),
    },
    {
      label: "Demo",
      link: "#projectDemo",
      content: <ProjectDemo title={title} srcUrl={demoUrl} />,
    },
  ];

  return <ContentPage sections={sections} type="projectPage" />;
};

export default Vermelho;
