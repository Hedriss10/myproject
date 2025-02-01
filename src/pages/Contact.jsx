import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const contactList = [
    { name: "Alex", age: 25 },
    { name: "Jhon", age: 30 },
    { name: "Maria", age: 22 },
  ];

  const handleContactClick = (contact) => {
    navigate(`/contact/${contact.name}`, { state: { contact } });
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <button onClick={() => alert("clique")}>Click</button>
      <h2>Contact List</h2>
      <ul>
        {contactList.map((contact, index) => (
          <li key={index}>
            <a href="" onClick={() => handleContactClick(contact)}>
              {contact.name}
            </a>
          </li>
        ))}
      </ul>
      <p>This is the contact page.</p>
    </div>
  );
};

export default Contact;
