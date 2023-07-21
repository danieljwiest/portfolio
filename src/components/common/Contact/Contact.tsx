const Contact = () => {
  // return (
  //   <section
  //     id="contact"
  //     className="section is-large has-background-danger-light"
  //   >
  //     <div className="container">
  //       <div>CONTACT</div>
  //       <p>
  //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis velit
  //         architecto cupiditate ratione ducimus perspiciatis totam labore
  //         beatae, molestiae atque iste iusto, quae sunt dicta magni! Ducimus
  //         amet, ipsum quasi perspiciatis doloremque nulla, voluptas distinctio
  //         cupiditate voluptatibus tempora repellat. Et
  //       </p>
  //     </div>
  //   </section>
  // );
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
              <a href="https://github.com/danieljwiest">
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
