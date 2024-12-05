import React, { createContext, useState } from "react";

export const ContactsContext = createContext();

export const ContactsProvider = ({ children }) => {
    const [contacts, setContacts] = useState([]);

    const addContact = (newContact) => {
        setContacts((prevContacts) => [...prevContacts, newContact]);
    };

    const delContact = (id) => {
        setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
    };

    const addFilter = (filterValue) => {
        setContacts((prevContacts) =>
            prevContacts.filter((contact) =>
                contact.name.toLowerCase().includes(filterValue.toLowerCase())
            )
        );
    };

    return (
        <ContactsContext.Provider value={{ contacts, addContact, delContact, addFilter }}>
            {children}
        </ContactsContext.Provider>
    );
};