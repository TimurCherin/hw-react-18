import React, { useContext } from "react";
import { ContactsContext } from "../../context/ContactsContext";

function ContactList() {
    const { contacts, delContact } = useContext(ContactsContext);

    return (
        contacts &&
        contacts.map(({ name, phone, id }) => (
            <div key={id}>
                <p>{name}</p>
                <p>{phone}</p>
                <button onClick={() => delContact(id)}>Del</button>
            </div>
        ))
    );
}

export default ContactList;