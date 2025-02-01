import React from "react";
import { myListContact } from "./Contact";

console.log(myListContact);

// check age buy alcohol
const contact = function (age = Number, name = String) {
  if (age >= 18) {
    return `${age} year old ${name} is allowed to buy alcohol.`;
  } else {
    return `${age} year old ${name} is not allowed to buy alcohol.`;
  }
};

// Componente head detais product
const DetailsContact = function (props) {
  return (
    <div className="text-center">
      <p className="font-bold">{props.name}</p>
      <p className="font-bold">System check age: {props.text}</p>
    </div>
  );
};

// Components principal
const ContactDetails = () => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-mono">Contact Details with React</h1>
      {myListContact.map((contactInfo, index) => (
        <DetailsContact
          key={index}
          name={contactInfo.name}
          text={contact(contactInfo.age, contactInfo.name)}
        />
      ))}
    </div>
  );
};

export default ContactDetails;
