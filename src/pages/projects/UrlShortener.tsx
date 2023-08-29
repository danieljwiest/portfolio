import ContentPage from "../../components/common/ContentPage/ContentPage";
import ProjectOverview from "../../components/ProjectPage/components/ProjectOverview/ProjectOverview";
import ProjectDemo from "../../components/ProjectPage/components/ProjectDemo/ProjectDemo";
import Hero from "../../components/common/Hero/Hero";
import { HeroProps } from "../../types/AppTypes";

const UrlShortener = () => {
  const title = "URL Shortener Micro-service";

  //Default Hero Props for all Project Pages
  const heroProps: HeroProps = {
    size: "is-large",
    background: "url(../img/url-shortener-long.png)",
    navBarOffset: true,
  };

  //Link to Demo if applicable
  const demoUrl = "https://fcc-urlshortener-production.up.railway.app/";

  //Link to gallery if applicable
  //   const galleryUrl = "";

  //Project overview/description paragraphs
  const overviewText = (
    <p>
      The scope of the URL Shortener Microservice is to create a service which
      creates &quot;short URLs&quot; for a user provided URL. API requests using
      the shortened URL redirect the user to the original URL. The project tests
      knowledge of Node.js and the Express framework.
      <br />
      <br />
      The project is part of the FreeCodeCamp, &quot;Backend Development &
      APIs&quot; course and represents the the use of Node.js and Express
      framework. The project utilizes boilerplate code, provided by
      FreeCodeCamp, for the server setup, HTML, and CSS.
      <br />
      <br />
      After completing the base project tasks in Replit, the project was moved
      to gitHub and is now publically hosted (see Project Links).
    </p>
  );

  //Relevant Links for the Project Overview (github repo, course site, etc)
  const projectLinks = [
    {
      text: "GitHub Repo",
      url: "https://github.com/danieljwiest/fcc-urlshortener",
    },
    {
      text: "FreeCodeCamp Project Overview",
      url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice",
    },
    {
      text: "URL Shortener Microservice Hosted Site",
      url: "https://fcc-urlshortener-production.up.railway.app",
    },
  ];

  //Project Goals. Array of bullet points.
  const goalsText = [
    "Complete a backend design for a simple microservice utilizing Node.js and Express",
    "Implement user input validation",
    "Implement error handling for middleware functions",
    "Increase familiarity processing HTML forms and POST requests",
  ];

  //List of technologies used (JS, React, etc). Array of bullet points.
  const techUsedText = ["JavaScript", "Node.js", "Express"];

  //List of hurdles in developing the project
  const hurdlesText = ["Validating user provided URLs"];

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

export default UrlShortener;
