export default function ContactPage() {
  return (
    <div className="container">

      <div className="header">
        Contact Page
      </div>

      <div className="contactCard">

        <p className="intro">
          We welcome your feedback, inquiries, and suggestions. Please reach us using the information below.
        </p>

        <div className="infoSection">

          <div>
            <h4>Office Address</h4>
            <p>
              Addalachinai Pradeshiya Sabha <br/>
              Akkaraipattu, Eastern Province, Sri Lanka
            </p>
          </div>

          <div>
            <h4>Contact Information</h4>
            <p>Telephone: +94 67 227 7355</p>
            <p>Email: aps@gmail.com</p>
          </div>

        </div>

        <form className="form">

          <input placeholder="Full Name"/>
          <input placeholder="Email Address"/>
          <input placeholder="Subject"/>
          <textarea placeholder="Message"></textarea>

          <button type="submit">
            Submit
          </button>

        </form>

      </div>

    </div>
  );
}