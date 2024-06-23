import { useEffect, useState } from "react";
import { getSearchedContacts } from "../utils/getSearchedContacts";
import { newSchemaData } from "../utils/newSchemaData";
import ContactsListSection from "./ContactsListsSection";
import RecentContacts from "./RecentContacts";


const ContactList = ({ List, searchQ }) => {
    const [searchedList, setSearchedList] = useState([]);
    const [finalArray, setFinalArray] = useState([]);

    useEffect(() => {
        getSearchedContacts(List, searchQ, setSearchedList);
    }, [List, searchQ])

    useEffect(() => {
        setFinalArray(newSchemaData(searchedList))
    }, [searchedList])

    return (
        <div className="px-[24px]">
            <RecentContacts List={List} />
            <ContactsListSection finalArray={finalArray} />
        </div>
    );
};

export default ContactList;
