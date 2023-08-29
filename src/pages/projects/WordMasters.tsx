import ContentPage from "../../components/common/ContentPage/ContentPage";
import ProjectOverview from "../../components/ProjectPage/components/ProjectOverview/ProjectOverview";
import ProjectDemo from "../../components/ProjectPage/components/ProjectDemo/ProjectDemo";
import Hero from "../../components/common/Hero/Hero";
import { HeroProps } from "../../types/AppTypes";

const WordMasters = () => {
  const title = "Word Masters";

  //Default Hero Props for all Project Pages
  const heroProps: HeroProps = {
    size: "is-large",
    background: "url(../img/word-masters-long.png)",
    navBarOffset: true,
  };

  //Link to Demo if applicable
  const demoUrl = "https://frabjous-druid-82c03f.netlify.app/";

  //Link to gallery if applicable
  //   const galleryUrl = "";

  //Project overview/description paragraphs
  const overviewText = (
    <p>
      The scope for the Word Masters project is to create a clone of the popular
      Wordle game using HTML, CSS, and Javascript. This project builds on
      previous course work and introduces AJAX requests, JSON, and async/await
      functions.
      <br />
      <br />
      The project is the final project of the Frontend Masters, &quot;Complete
      Intro to Web Development v3&quot; course. It represents the combined use
      of HTML, CSS, and Javascript in a single project with the addition of
      server requests.
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
      url: "https://github.com/danieljwiest/intro-to-webdev-v3/tree/2ce765baee80b58464ec5faaad9fb31feac5b49b/word-masters",
    },
    {
      text: "Frontend Masters Project Overview",
      url: "https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/talking-to-servers/project",
    },
  ];

  //Project Goals. Array of bullet points.
  const goalsText = [
    "Complete a full project from scratch utilizing HTML, CSS, JS",
    "Communicate with servers to request and validate information",
    'FUTURE GOAL: Implement a "Keyboard" to visually display previously checked letters',
    'FUTURE GOAL: Implement a more interesting "Win/Loss" display when the game is completed',
  ];

  //List of technologies used (JS, React, etc). Array of bullet points.
  const techUsedText = ["JavaScript", "HTML", "CSS", "AJAX"];

  //List of hurdles in developing the project
  const hurdlesText = [
    'Developing the logic for correctly styling multiple  "Non-Exact" matches',
    'Implementing a "Card-Flip" animation',
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

export default WordMasters;
