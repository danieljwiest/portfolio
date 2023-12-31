//TODO: Figure out why setting "is-widescreen" doesnt seem to work with the columns options. is-desktop and is-mobile work

import ResumeItem from "./components/ResumeItem/ResumeItem";

const Resume = () => {
  return (
    <section id="resume" className="section is-medium has-background-light">
      <div className="navBarOffset"></div>
      <div className="container">
        <div className="title is-1 is-flex is-justify-content-center mb-6">
          RESUME
        </div>
        <div className="columns is-desktop">
          <div className={`column is-5-desktop is-justify-content-center pt-5`}>
            <figure className="image is-3x4">
              <img src="/img/danielwiest-portrait.JPG" alt="HeadShot"></img>
            </figure>
            <div className="is-flex is-justify-content-center my-4">
              <a
                className="button is-medium is-responsive"
                href="/Daniel_Wiest_Software_Engineer_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Full Resume
              </a>
            </div>
          </div>
          <div className="column is-1 is-hidden-touch"></div>
          <div className="column">
            <div className="title is-size-3">Software Languages</div>
            <ResumeItem
              company=""
              location=""
              position="JavaScript, Typescript, Node.js, Express, HTML, CSS"
              period=""
              status=""
            />
            <div className="title is-size-3">Work Experience</div>
            <ResumeItem
              company={"HDR Engineering, Inc"}
              location="Portland, OR"
              position="Consulting Engineer"
              period="11/2022-present"
              status="part time"
            />
            <ResumeItem
              company={"HDR Engineering, Inc"}
              location="Portland, OR"
              position="Transmission Section Manager"
              period="08/2020-11/2022"
              status="fulltime"
            />
            <ResumeItem
              company={"HDR Engineering, Inc"}
              location="Portland, OR"
              position="Project Engineer"
              period="01/2016-08/2020"
              status="fulltime"
            />
            <ResumeItem
              company={"HDR Engineering, Inc"}
              location="Portland, OR"
              position="Engineering EIT II"
              period="07/2013-01/2016"
              status="fulltime"
            />
            <ResumeItem
              company={"HDR Engineering, Inc"}
              location="Billings, MT"
              position="Engineering EIT I"
              period="05/2011-07/2013"
              status="fulltime"
            />
            <div className="title is-size-3">Education</div>
            <ResumeItem
              company={"Gonzaga University"}
              location="Spokane, WA"
              position="BS Mechanical Engineering"
              period="08/2006-05/2010"
            />
            <ResumeItem
              company={"Frontend Masters"}
              location="Remote"
              position="Web Development - JS, CSS, React, Data Structures/Algorithms"
              period="01/2023-PRESENT"
            />
            <ResumeItem
              company={"Free Code Camp"}
              location="Remote"
              position="Software Engineering - JS, Node.JS, Express, PostgreSQL, MongoDB, Python"
              period="08/2022-PRESENT"
            />
            <div className="title is-size-3">Liscensure</div>
            <ResumeItem
              company={"WA State Board of Licensing"}
              location="WA"
              position="Professional Engineer No. 53377 "
              period="12/2015-Present"
            />
            <ResumeItem
              company={"OSBEELS"}
              location="OR"
              position="Professional Engineer No. 96310PE"
              period="07/2020-Present"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
