import React from "react";
import { useNavigate } from "react-router-dom";

export const myListContact = [
  { id: 1, name: "Alex", age: 25 },
  { id: 2, name: "Jhon", age: 30 },
  { id: 3, name: "Maria", age: 22 },
  { id: 4, name: "Invoker", age: 17 },
];

const Contact = () => {
  const navigate = useNavigate();

  const handleContactClick = (contact) => {
    navigate(`/contact/${contact.id}`, { state: { contact } });
  };

  return (
    <div className="text-center">
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Age</th>
          </tr>
        </thead>
        <tbody>
          {myListContact.map((contact) => (
            <tr
              key={contact.id}
              onClick={() => handleContactClick(contact)}
              className="bg-gray-100 border-b hover:bg-gray-200 cursor-pointer"
            >
              <td className="px-4 py-2 border">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleContactClick(contact);
                  }}
                  className="text-blue-500 hover:text-blue-700"
                >
                  {contact.name}
                </a>
              </td>
              <td className="px-4 py-2 border">{contact.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contact;
