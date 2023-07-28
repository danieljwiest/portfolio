import ContentPage from "../../components/common/ContentPage/ContentPage";
import ProjectOverview from "../../components/common/ProjectPage.tsx/components/ProjectOverview/ProjectOverview";
// import ProjectDemo from "../../components/common/ProjectPage.tsx/components/ProjectDemo/ProjectDemo";
import Hero from "../../components/common/Hero/Hero";
import { HeroProps } from "../../types/AppTypes";

const CubeCobra = () => {
  const title = "Cube Cobra";

  //Default Hero Props for all Project Pages
  const heroProps: HeroProps = {
    size: "is-large",
    background: "url(../img/cube-cobra-long.png)",
    navBarOffset: true,
  };

  //Link to Demo if applicable
  //   const demoUrl = "";

  //Link to gallery if applicable
  // const galleryUrl = "";

  //Project overview/description paragraphs
  const overviewText = (
    <div className="content">
      <p>
        CubeCobra is an open source web application for building, managing, and
        playtesting Magic: the Gathering cubes. It is the preeminent MTG Cube
        managment tool and is a center piece for the entire MTG Cube Community.
        <br />
        <br />
        CubeCobra is a tool that I use on a regular basis. Participating in this
        open source project allows me to contribute to this hobby community and
        gain experience working on a larger project.
        <br />
        <br />
        To date my contributions have included:
      </p>
      <ul>
        <li>
          Reviewing issue backlog for resolved issues that should be closed.
        </li>

        <li>
          Creating and issue and sumbitting a pull request for a bug I
          personally encounter
        </li>
      </ul>
    </div>
  );

  //Relevant Links for the Project Overview (github repo, course site, etc)
  const projectLinks = [
    {
      text: "Project Github Repo",
      url: "https://github.com/dekkerglen/CubeCobra",
    },
    {
      text: "Example Issue",
      url: "https://github.com/dekkerglen/CubeCobra/issues/2407",
    },
    {
      text: "Example Pull Request",
      url: "https://github.com/dekkerglen/CubeCobra/pull/2408",
    },
  ];

  //Project Goals. Array of bullet points.
  const goalsText = [
    "Practice reading code",
    "Contribute and provide tangible benefits to a community I actively engage in",
    "Participate in an open source project",
    "Fix a bug that impacts my personal use of the CubeCobra website",
  ];

  //List of technologies used (JS, React, etc). Array of bullet points.
  const techUsedText = ["JavaScript", "React", "AWS", "Webpack"];

  //List of hurdles in developing the project
  const hurdlesText = [
    "Becoming familier with a large existing codebase",
    "Setting up the project Dev Environment (existing instructions were out of date)",
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
  ];

  return <ContentPage sections={sections} type="projectPage" />;
};

export default CubeCobra;
