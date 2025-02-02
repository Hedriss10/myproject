import React from "react";
import PropTypes from "prop-types"; // Importe PropTypes
import { myListContact } from "./Contact";

// Função para verificar a idade
const contact = function (age = Number, name = String) {
  if (age >= 18) {
    return `${age} year old ${name} is allowed to buy alcohol.`;
  } else {
    return `${age} year old ${name} is not allowed to buy alcohol.`;
  }
};

// Componente DetailsContact
const DetailsContact = function (props) {
  return (
    <div className="text-center">
      <p className="font-bold">{props.name}</p>
      <p className="font-bold">System check age: {props.text}</p>
    </div>
  );
};

// Validação de tipos para DetailsContact
DetailsContact.propTypes = {
  name: PropTypes.string.isRequired, // name deve ser uma string e é obrigatório
  text: PropTypes.string.isRequired, // text deve ser uma string e é obrigatório
};

// Componente principal
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
