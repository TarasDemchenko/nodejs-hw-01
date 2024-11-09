import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    const allContacts = await readContacts();
    return allContacts;
};

getAllContacts().then(console.log).catch(console.log);