import React from "react";
import { useLocation } from "react-router-dom";

const ContactDetail = () => {
    const location = useLocation();
    const { state } = location;
    const contact = state?.contact;

    if (!contact) {
        return <p>Contact not found</p>;
    }

    return (
        <div>
            <h1>Contact Detail Page</h1>
            <p>Name: {contact.name}</p>
            <p>Age: {contact.age ? contact.age : "Age not available"}</p>
        </div>
    );
};

export default ContactDetail;