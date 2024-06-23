import axios from "axios";
import { useEffect, useState } from "react";
import { alphabetsArray } from "../constants/Constants";
import AlphSecSortedContacts from "../utils/AlphSecSortedContacts";
import { getSearchedContacts } from "../utils/getSearchedContacts";
import ContactsSection from "./ContactsListsSection";
import RecentContacts from "./RecentContacts";

const ContactList = ({ searchQ }) => {
    const [List, setList] = useState([]);
    const [searchedList, setSearchedList] = useState([]);
    const [sortedContactsArray, setSortedContactsArray] = useState([]);
    const url = "https://6676800f145714a1bd71ee8f.mockapi.io/Contacts";


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setList(response.data);
                // console.log(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        getSearchedContacts(List, searchQ, setSearchedList);
        console.log("sortedContactsArray", sortedContactsArray)
        setSortedContactsArray(AlphSecSortedContacts(searchedList, alphabetsArray))
    }, [searchQ])






    return (
        <div className="px-[24px]">
            < RecentContacts List={List} />
            <div className="text-black min-h-svh w-full my-4 rounded-xl">
                <h1>Contacts</h1>
                {/* {console.log("sortedContactsArray", sortedContactsArray)} */}
                <ul className="bg-transferent min-h-svh w-fu">
                    {sortedContactsArray.map((obj) => (
                        <li key={obj.Alphabet}>
                            <ContactsSection obj={obj} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ContactList;
