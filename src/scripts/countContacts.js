import { getAllContacts } from "./getAllContacts.js";

export const countContacts = async () => {
    const contacts = await getAllContacts();
    const count = contacts.length;
    return count;
};

countContacts().then(console.log).catch(console.error);

