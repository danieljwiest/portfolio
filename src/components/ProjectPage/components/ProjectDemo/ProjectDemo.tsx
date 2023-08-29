import "./ProjectDemo.styles.css";

const ProjectDemo = ({ title, srcUrl }: { title: string; srcUrl: string }) => {
  const demoTitle = `${title} Project Demo`;

  return (
    <section
      id="projectDemo"
      className="section is-large has-background-light py-6"
    >
      <div className="navBarOffset"></div>
      <div className="container">
        <div className="title is-2 is-flex is-justify-content-center pb-6">
          {demoTitle}
        </div>
        <iframe
          className="is-square"
          title={demoTitle}
          src={srcUrl}
          width="100%"
          height="100%"
        />
      </div>
    </section>
  );
};

export default ProjectDemo;
