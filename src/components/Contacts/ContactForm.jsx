import React, { useContext, useRef } from "react";
import { nanoid } from "nanoid";
import { FormWrap } from "./ContactForm.styled";
import { ContactsContext } from "../../context/ContactsContext";

function ContactForm() {
    const { addContact } = useContext(ContactsContext);
    const nameRef = useRef();
    const phoneRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = {
            name: nameRef.current.value,
            phone: phoneRef.current.value,
            id: nanoid(),
        };
        e.currentTarget.reset();
        addContact(newContact);
    };

    return (
        <FormWrap>
            <form onSubmit={handleSubmit}>
                <h2>Phonebook</h2>
                <label htmlFor="nameId">Name</label>
                <input ref={nameRef} type="text" name="name" id="nameId" required />
                <label htmlFor="numberId">Number</label>
                <input ref={phoneRef} type="tel" name="number" id="numberId" required />
                <button type="submit">Add contact</button>
            </form>
        </FormWrap>
    );
}

export default ContactForm;