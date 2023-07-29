import TileGrid from "./components/TabbedTileGrid";

const Projects = () => {
  //Project Data Template
  /*
  {
    title: "string"
    category: "string"
    imgURL: "string"
  }
  */
  const projectList = [
    {
      id: 1,
      title: "Vermelho Game",
      category: "Front End",
      imgURL: "url(../img/vermelho.png)",
    },
    {
      id: 2,
      title: "Exercise Tracker Microservice",
      category: "Back End",
      imgURL: "url(../img/exercise-tracker-square.png",
    },

    {
      id: 3,
      title: "Word Masters",
      category: "Front End",
      imgURL: "url(../img/word-masters-square.png)",
    },
    {
      id: 4,
      title: "Calculator",
      category: "Front End",
      imgURL: "url(../img/calculator.png)",
    },
    {
      id: 5,
      title: "CubeCobra",
      category: "OpenSource",
      imgURL: "url(../img/cube.jpg)",
    },
    {
      id: 6,
      title: "Timestamp Microservice",
      category: "Back End",
      imgURL: "url(../img/timestamp-microservice-square.png)",
    },
    {
      id: 7,
      title: "Request Header Parser Microservice",
      category: "Back End",
      imgURL: "url(../img/header-parser-square.png)",
    },
    {
      id: 8,
      title: "URL Shortener Microservice",
      category: "Back End",
      imgURL: "url(../img/url-shortener-square.png)",
    },
    {
      id: 9,
      title: "Utility Shed",
      category: "Hobby",
      imgURL: "url(../img/shed_final.jpg)",
    },

    {
      id: 10,
      title: "File Metadata Microservice",
      category: "Back End",
      imgURL: "url(../img/file-metadata-square.png",
    },
  ];

  return (
    <section id="projects" className="section is-medium has-background-light">
      <div className="navBarOffset"></div>
      <div className="container">
        <div className="title is-1 is-flex is-justify-content-center">
          PROJECTS
        </div>
        <div className="tile is-ancestor"></div>
        <TileGrid data={[...projectList]} />
      </div>
    </section>
  );
};

export default Projects;
