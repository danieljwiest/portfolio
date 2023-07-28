const Contact = () => {
  return (
    <footer className="footer borderTop">
      <div className="columns">
        <div className="column is-one-third is-flex is-justify-content-center is-align-content-center is-flex-direction-column">
          <div className="subtitle is-flex is-justify-content-center">
            Phone
          </div>
          <div className="is-flex is-justify-content-center">509.860.5434</div>
        </div>
        <div className="column is-one-third is-flex is-justify-content-center is-align-content-center is-flex-direction-column">
          <div className="subtitle is-flex is-justify-content-center">
            Email
          </div>
          <div className="is-flex is-justify-content-center">
            dwiest4@gmail.com
          </div>
        </div>
        <div className="column is-one-third is-flex is-justify-content-center is-align-content-center is-flex-direction-column">
          <div className="subtitle is-flex is-justify-content-center">
            Social
          </div>
          <div className="is-flex is-justify-content-center">
            <span className="icon">
              <a href="https://github.com/danieljwiest">
                <img
                  src="/img/favicons/icons8-github-64.png"
                  alt="github icon"
                ></img>
              </a>
            </span>
            <span className="icon">
              <a href="https://www.linkedin.com/in/daniel-james-wiest/">
                <img
                  src="/img/favicons/icons8-linked-in-50.png"
                  alt="linkedIn icon"
                ></img>
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
