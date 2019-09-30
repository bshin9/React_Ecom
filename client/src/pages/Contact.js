import React from "react";
import "../Contactpage.css";

class Contact extends React.Component {
  render() {
    return (
      <div className="Contact">
        {/* HEADER */}
        <section id="header2">
          <div className="container text-center">
            <div className="row"></div>
          </div>
        </section>
        {/* Contact */}
        <section id="contact">
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <h2>Contact Us!</h2>
                <hr width="30%" />
                <p>If you have any questions we are here for you!</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 mx-auto">
                <form id="name_form" onsubmit="return validateName()">
                  <fieldset className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-sm"
                      id="email"
                      placeholder="Email"
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="fullname"
                      placeholder="Name"
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="subject"
                      placeholder="Subject"
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <textarea
                      className="form-control form-control-sm"
                      id="message"
                      placeholder="Comments"
                      rows={3}
                      defaultValue={""}
                    />
                  </fieldset>
                  <button
                    type="submit"
                    className="btn btn-outline-info btn-block">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
