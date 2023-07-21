import ContentPage from "../../components/common/ContentPage/ContentPage";
import ProjectOverview from "../../components/common/ProjectPage.tsx/components/ProjectOverview/ProjectOverview";
import ProjectGallery from "../../components/common/ProjectPage.tsx/components/ProjectGallery/ProjectGallery";
import Hero from "../../components/common/Hero/Hero";
import { HeroProps } from "../../types/AppTypes";

const UtilityShed = () => {
  const title = "Utility Shed";

  //Default Hero Props for all Project Pages
  const heroProps: HeroProps = {
    size: "is-large",
    background: "url(../img/shed_final.jpg)",
    navBarOffset: true,
  };

  //Link to Demo if applicable
  // const demoUrl =
  //   "https://fcctimestamp-microservice-production.up.railway.app/";

  //Photo Gallery Data if applicable. Assumes all files are in same folder and share a base file name with a numerical increment "img-1.jpg, img-2.jpg, etc"
  const galleryData = {
    folderUrl: "/img/shed-photos/",
    fileNameStart: "shed-",
    fileExt: ".jpg",
    numOfPics: 22,
  };

  //Project overview/description paragraphs
  const overviewText = (
    <div className="content">
      <p>
        The scope of the Utility Shed project was to build a functional,
        aesthetically pleasing, and professional quality shed in our backyard.
        The primary driver for the project was the need for additional tool
        storage and to free space for a future basement remodel.
        <br />
        <br />
        The project was fully designed, engineered, and constructed by my wife
        and myself. Primary Project tasks included:
      </p>
      <ul>
        <li>Shed & Retaining wall design</li>
        <li>Earthwork & Ground Excavation</li>
        <li>Retaining Wall Foundation</li>
        <li>Shed Masonry Block Retaining Wall</li>
        <li>Landscape Block Retaining Wall</li>
        <li>Shed Framing</li>
        <li>Roof Installation</li>
        <li>Siding Installation</li>
        <li>Painting</li>
      </ul>
    </div>
  );

  //Relevant Links for the Project Overview (github repo, course site, etc)
  // const projectLinks = [];

  //Project Goals. Array of bullet points.
  const goalsText = [
    "Build a functional utility shed with a professional look",
    "Save capital by doing work ourselves",
    "Improve knowledge and understanding of carpentry",
  ];

  //List of technologies used (JS, React, etc). Array of bullet points.
  const techUsedText = [
    "Rough Carpentry",
    "Masonry",
    "Shovel & Pick",
    "Electrical Wiring",
  ];

  //List of hurdles in developing the project
  const hurdlesText = [
    "Earthwork and Excavation",
    "Retaining Wall and Foundation Design",
    "Project Scheduling",
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
          // projectLinks={projectLinks}
        />
      ),
    },
    {
      label: "Gallery",
      link: "#projectGallery",
      content: <ProjectGallery title={title} galleryData={galleryData} />,
    },
  ];

  return <ContentPage sections={sections} type="projectPage" />;
};

export default UtilityShed;
