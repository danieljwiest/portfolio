import ContentPage from "../../components/common/ContentPage/ContentPage";
import ProjectOverview from "../../components/common/ProjectPage.tsx/components/ProjectOverview/ProjectOverview";
import ProjectDemo from "../../components/common/ProjectPage.tsx/components/ProjectDemo/ProjectDemo";
import Hero from "../../components/common/Hero/Hero";
import { HeroProps } from "../../types/AppTypes";

const Calculator = () => {
  const title = "Calculator";

  //Default Hero Props for all Project Pages
  const heroProps: HeroProps = {
    size: "is-large",
    background: "url(../img/calculator.png)",
    navBarOffset: true,
  };

  //Link to Demo if applicable
  const demoUrl = "https://amazing-gecko-077eec.netlify.app/";

  //Link to gallery if applicable
  // const galleryUrl = "";

  //Project overview/description paragraphs
  const overviewText = (
    <p>
      The goal of the Calculator project was to create a functional calculator
      using HTML, CSS, and JavaScript. The design of the calculator is based off
      of the iOS calculator app.
      <br />
      <br />
      The project was part of the Frontend Masters, &quot;Complete Intro to Web
      Development v3&quot; course and represents the combined use of HTML, CSS,
      and Javascript in a single project.
      <br />
      <br />
      All code for this project was written from scratch based on the project
      prompt.
    </p>
  );

  //Relevant Links for the Project Overview (github repo, course site, etc)
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
    "Complete a full project from scratch using HTML, CSS, and JavaScript",
    "Practice using event listeners",
    "Developing a user interface from a provided design",
  ];

  //List of technologies used (JS, React, etc). Array of bullet points.
  const techUsedText = ["JavaScript", "HTML", "CSS"];

  //List of hurdles in developing the project
  const hurdlesText = [
    "Managing Display State",
    "Structuring calculator logic",
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

  return <ContentPage sections={sections} />;
};

export default Calculator;
