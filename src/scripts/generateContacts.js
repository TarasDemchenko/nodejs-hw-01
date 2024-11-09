import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";



const generateContacts = async (count) => {
    try {
        const contacts = await readContacts();
         for (let i = 0; i < count; i++) {
             const newContact = createFakeContact();
             contacts.push(newContact);
             await writeContacts(contacts);
             console.log("add"); 
         } 
    } catch (error) {
        console.error(error);
    }   
};

generateContacts(5);
