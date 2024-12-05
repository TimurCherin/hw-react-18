import React, { useContext, useRef } from "react";
import { ContactsContext } from "../../context/ContactsContext";

function ContactFilter() {
    const { addFilter } = useContext(ContactsContext);
    const inputRef = useRef();

    const filterName = () => {
        const inputValue = inputRef.current.value;
        addFilter(inputValue);
    };

    return (
        <form>
            <label htmlFor="filter">Find contact by name</label>
            <input
                ref={inputRef}
                onChange={filterName}
                type="text"
                name="filter"
                id="filter"
                required
            />
        </form>
    );
}

export default ContactFilter;