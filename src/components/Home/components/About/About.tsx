const About = () => {
  return (
    <section id="about" className="section is-medium has-background-light">
      <div className="navBarOffset"></div>
      <div className="container">
        <div className="title is-1 is-flex is-justify-content-center mb-6">
          MY BIO
        </div>
        <div className="tile is-ancestor">
          <div className="tile px-6 pt-5">
            <figure className="image">
              <img src="/img/family-portrait.jpg" alt="HeadShot"></img>
            </figure>
          </div>
          <div className="tile is-parent is-vertical px-6">
            {/* <h1 className="title is-1">My Bio</h1> */}
            <div className="content is-size-5">
              <p>
                I am a successful, licensed Mechanical Engineer with more than
                12 years of experience seeking a career change into software
                development.
                <br />
                <br />
                In my previous career, I have been a strong performer with
                experience both in management and as a technical leader. My most
                recent role included the following responsibilities:
              </p>
              <ul>
                <li>
                  Regional Team Manager for the Oregon Transmission Section
                </li>
                <li>Lead Technical Engineer</li>
                <li>Project Manager</li>
                <li>Program Technical Lead</li>
              </ul>
              <p>
                To date my software experience has primarly utilized
                Javascript/Typescript, React, and Node.JS. I am, however, an
                Engineer at heart and am no stranger to adapting to the tools
                needed for the project at hand.
                <br />
                <br />
                In my personal life, you will usually find me chasing around my
                two young kids, playing a board game, hiking, or working on
                endless house projects.
                <br />
                <br />I am excited for the opportunity to continue to learn and
                develop as a Software Engineer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
