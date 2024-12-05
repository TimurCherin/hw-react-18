import React from "react";
import { ContactsProvider } from "./context/ContactsContext";
import { FeedbackProvider } from "./context/FeedbackContext";
import ContactForm from "./components/Contacts/ContactForm";
import ContactFilter from "./components/Contacts/ContactFilter";
import ContactList from "./components/Contacts/ContactList";
import { Options } from "./components/Feedback/Options";
import { Feedback } from "./components/Feedback/Feedback";

function App() {
  return (
    <ContactsProvider>
      <FeedbackProvider>
        <div>
          <h1>Contact Manager</h1>
          <ContactForm />
          <ContactFilter />
          <ContactList />
          <h1>Feedback</h1>
          <Options />
          <Feedback />
        </div>
      </FeedbackProvider>
    </ContactsProvider>
  );
}

export default App;