import React from "react";


const Contact = () => {

    const contactList = ["Alex", "Jhon", "Maria"];
    return (
        <div>
            <h1>Contact Page</h1>
            <button onClick={() => alert('clique')}>Click</button>
            <ul>
                {contactList.map((contact, index) => (
                    <li key={index}>{contact}</li>
                ))}
            </ul>
            <p>This is the contact page.</p>
        </div>
    );
};

export default Contact;