import React from "react";
import axios from "axios";
import GetContact from "./GetContact";

class CommentBox extends React.Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    // const url = "http://localhost:8000/api/contacts/";
    // fetch(url).catch(error => console.log('BAD', error)).then(response => console.log('GOOD', response));
    axios
      .get("/api/contacts")
      .then(res => {
        this.setState({ contacts: res.data }, () =>
          console.log(this.state.contacts)
        );
      })
      .catch(err => {
        console.log(err);
      });
  }
  // We want to map through the contacts using state just like how we did the products
  // We use this so that we can call GetContact
  render() {
    return (
      <div className="getContact">
        {this.state.contacts &&
          this.state.contacts.map(contacts => (
            <GetContact
              contact_id={contacts.contact_id}
              user_name={contacts.user_name}
              message={contacts.message}
            />
          ))}
      </div>
    );
  }
}

export default CommentBox;
