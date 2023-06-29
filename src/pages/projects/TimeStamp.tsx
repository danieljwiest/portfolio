import ContentPage from "../../components/common/ContentPage/ContentPage";
import ProjectOverview from "../../components/common/ProjectPage.tsx/components/ProjectOverview/ProjectOverview";
import ProjectDemo from "../../components/common/ProjectPage.tsx/components/ProjectDemo/ProjectDemo";
import Hero from "../../components/common/Hero/Hero";
import { HeroProps } from "../../types/AppTypes";

const TimeStamp = () => {
  const title = "Timestamp Microservice";

  //Default Hero Props for all Project Pages
  const heroProps: HeroProps = {
    size: "is-large",
    background: "url(../img/timestamp-microservice-long.png)",
    navBarOffset: true,
  };

  //Link to Demo if applicable
  const demoUrl =
    "https://fcctimestamp-microservice-production.up.railway.app/";

  //Link to gallery if applicable
  //   const galleryUrl = "";

  //Project overview/description paragraphs
  const overviewText = (
    <p>
      The scope of the Timestamp Microservice was to create service to convert
      dates between &quot;UTC&quot; and &quot;UNIX&quot; formats. The project
      tested knowledge of Node.js and the Express framework.
      <br />
      <br />
      The project was part of the FreeCodeCamp, &quot;Backend Development &
      APIs&quot; course and represents the the use of Node.js and Express
      framework. The project utilizes boilerplate code, provided by
      FreeCodeCamp, for the server setup, HTML, and CSS.
      <br />
      <br />
      After completing the base tasks of the project in Replit, the project was
      moved to gitHub and is is now publically hosted (see Project Links).
    </p>
  );

  //Relevant Links for the Project Overview (github repo, course site, etc)
  const projectLinks = [
    {
      text: "GitHub Repo",
      url: "https://github.com/danieljwiest/fcc_timestamp-microservice",
    },
    {
      text: "FreeCodeCamp Project Overview",
      url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/timestamp-microservice",
    },
    {
      text: "Timestamp Microservice Hosted Site",
      url: "https://fcctimestamp-microservice-production.up.railway.app/",
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
  const techUsedText = ["JavaScript", "Node.js", "Express"];

  //List of hurdles in developing the project
  const hurdlesText = [
    "Handling Date formats",
    "Dealing with different timezones for dates. The FCC test suite was located in a different timezone than the project servers",
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

export default TimeStamp;
