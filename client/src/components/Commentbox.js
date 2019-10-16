import React from "react";
import EditComment from "./EditComment";

class CommentBox extends React.Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    const url = "http://localhost:8000/api/contacts";
    fetch(url)
    .then((response) => {
      return response.json();
    })
      .then((data) => {
        this.setState({contacts:data})
      })
    .catch((error) => {
      console.log('BAD', error)
    });
  }
  // We want to map through the contacts using state just like how we did the products
  // We use this so that we can call GetContact
  render() {
    return (
      <div className="getContact">
        {this.state.contacts &&
          this.state.contacts.map(contacts => (
            <EditComment
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
