import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "../CSS/contact.css";

const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate();

  //Handling Input values
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  //Handling Submission of values
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      console.log(contact);
      if (response.ok) {
        // const responseData = await async response.json();
        console.log("Message Sent ");
        setContact({ email: "", username: "", message: "" });
        navigate("/");
      } else {
        alert("Message Not Sent");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <main>
        <div className="section-registration">
          {/* <div className="reg-left">
              <div className="contact-img">
                <img
                  src="/images/support.png"
                  alt="404"
                  width={500}
                  height={500}
                />
              </div>
            </div> */}

          <div className="reg-right">
            <div className="reg-form">
              <h1 className="main-heading">Contact US</h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username"> Username </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter Name"
                    id="username"
                    required
                    value={contact.username}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="email"> Email </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email "
                    id="email"
                    required
                    value={contact.email}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="message"> Message </label>
                  <textarea
                    type="textarea"
                    name="message"
                    placeholder="message"
                    id="message"
                    required
                    value={contact.message}
                    onChange={handleInput}
                  ></textarea>
                </div>
                <br />
                <button type="sumbit" className="reg-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Contact;
