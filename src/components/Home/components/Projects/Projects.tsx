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
      category: "Software",
      imgURL: "url(../img/vermelho.png)",
    },
    {
      id: 2,
      title: "Utility Shed",
      category: "Hobby",
      imgURL: "url(../public/img/shed_final.jpg)",
    },
    {
      id: 3,
      title: "Calculator",
      category: "Software",
      imgURL: "url(../img/calculator.png)",
    },
    {
      id: 4,
      title: "Word Masters",
      category: "Software",
      imgURL: "url(../img/word-masters-square.png)",
    },
    {
      id: 5,
      title: "MTG Draft Cube",
      category: "Hobby",
      imgURL: "url(../img/cube.jpg)",
    },
    {
      id: 6,
      title: "Timestamp Microservice",
      category: "Node.js",
      imgURL: "url(../img/timestamp-microservice-square.png)",
    },
    {
      id: 7,
      title: "Request Header Parser Microservice",
      category: "Node.js",
      imgURL: "url(../img/header-parser-square.png)",
    },
    {
      id: 8,
      title: "URL Shortener Microservice",
      category: "Node.js",
      imgURL: "url(../img/url-shortener-square.png)",
    },
    {
      id: 9,
      title: "Exercise Tracker Microservice",
      category: "Node.js",
      imgURL: "url(../img/exercise-tracker-square.png",
    },
    {
      id: 10,
      title: "File Metadata Microservice",
      category: "Node.js",
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
