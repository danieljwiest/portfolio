const About = () => {
  return (
    <section id="about" className="section is-medium has-background-link-light">
      <div className="navBarOffset"></div>
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile px-6">
            <figure className="image">
              <img src="/img/image_1_long.jpg.webp" alt="HeadShot"></img>
            </figure>
          </div>
          <div className="tile is-parent is-vertical px-6">
            <h1 className="title is-1">My Bio</h1>
            <div className="content is-size-5">
              <p>
                I am a successful Mechanical Engineer with more than 11 years of
                professional experience seeking a career change into software
                development.
                <br />
                <br />
                In my previous career, I was strong performer with experience in
                both management and as a technical lead. My most recent roles
                included:
              </p>
              <ul>
                <li>
                  Regional Team Manger for the Oregon Transmission Section
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
                <br />I am excited for the opportunity to continue to learn and
                develop as Software Engineer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
