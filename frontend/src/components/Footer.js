import logo from "../assets/logo.png";
function Footer() {
  return (
    <footer>
      <section className="App-footer">
        <section className="Logo">
          <figure className="Logo-background">
            <img src={logo} alt="logo" />
          </figure>
        </section>
        <section>
          <h1>Opening Times</h1>
          <p>
            <span>Monday-Thursday:</span>
            <span>18:00-23:00</span>
          </p>
          <p>
            <span>Friday:</span>
            <span>17:00-00:00</span>
          </p>
          <p>
            <span>Saturday:</span>
            <span>13:00-00:00</span>
          </p>
          <p>
            <span>Sunday:</span>
            <span>13:00-23:00</span>
          </p>
        </section>
        <section>
          <h1>Contact</h1>
          <p className="Address">
            <h2>Address</h2>
            <p>
              Little Lemon Restaurant 187 Stoke Newington High Street London,
              N16 0LH, United Kingdom
            </p>
          </p>
          <p>
            <span>Phone:</span>
            <span>+44(0) 749 1234567</span>
          </p>
          <p>
            <span>Email:</span>
            <span>info@littlelemon.co.uk</span>
          </p>
        </section>
        <section>
          <h1>Site Tools</h1>
          <a href="/">Terms & Conditions</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Our Jobs</a>
          <a href="/">Comments and Complaints</a>
          <a href="/">News And Events</a>
          <a href="/">Corporate responsibility</a>
          <a href="/">Contact us</a>
        </section>
      </section>
      <section className="Socials">
        <h4>Find us on social media</h4>
        <a href="/" aria-label="Link to our Facebook page">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt=""
          />
        </a>
        <a href="/" aria-label="Link to our Instagram page">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
            alt=""
          />
        </a>
        <a href="/" aria-label="Link to our Youtube channel">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
            alt=""
          />
        </a>
      </section>
      <section className="Copyright">
        © 2023 by Little Lemon Restaurant.
      </section>
    </footer>
  );
}

export default Footer;
