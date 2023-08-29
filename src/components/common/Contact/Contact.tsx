const Contact = () => {
  return (
    <footer className="footer borderTop">
      <div className="columns">
        <div className="column is-one-third is-flex is-justify-content-center is-align-content-center is-flex-direction-column">
          <div className="subtitle is-flex is-justify-content-center">
            Phone
          </div>
          <div className="is-flex is-justify-content-center">
            <a href="tel:509.860.5434">509.860.5434</a>
          </div>
        </div>
        <div className="column is-one-third is-flex is-justify-content-center is-align-content-center is-flex-direction-column">
          <div className="subtitle is-flex is-justify-content-center">
            Email
          </div>
          <div className="is-flex is-justify-content-center">
            <a href="mailto:dwiest4@gmail.com">dwiest4@gmail.com</a>
          </div>
        </div>
        <div className="column is-one-third is-flex is-justify-content-center is-align-content-center is-flex-direction-column">
          <div className="subtitle is-flex is-justify-content-center">
            Connect
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
