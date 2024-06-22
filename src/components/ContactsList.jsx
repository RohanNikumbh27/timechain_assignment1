import axios from "axios";
import { useEffect, useState } from "react";
import { alphabetsArray } from "../constants/Constants";
import { AlphSecSortedContacts } from "../utils/AlphSecSortedContacts";
import ContactsSection from "./ContactsListsSection";
import Person from "./Person";

const ContactList = () => {
    const [List, setList] = useState([]);
    const [sortedContactsArray, setSortedContactsArray] = useState([]);

    const url = "https://6676800f145714a1bd71ee8f.mockapi.io/Contacts";
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setList(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        setSortedContactsArray(AlphSecSortedContacts(List, alphabetsArray));
    }, [List])

    const recentContacts = List.slice(0, 3);

    return (
        <>
            <div>
                <h1>Recent</h1>
                {/* Recent 3 Contacts (Random) */}
                <div>
                    <ul>
                        {recentContacts.map((Contact) => (
                            <li key={Contact.id}>
                                <Person Contact={Contact} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="text-black min-h-svh w-full my-4 rounded-xl">
                <h1>Contacts</h1>
                <ul className="bg-transferent min-h-svh w-fu">
                    {sortedContactsArray.map((obj) => (
                        <li key={obj.Alphabet}>
                            <ContactsSection obj={obj} />
                        </li>

                    ))}
                </ul>
            </div>
        </>
    );
};

export default ContactList;
