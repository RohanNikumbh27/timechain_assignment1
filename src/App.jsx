import axios from "axios";
import { useEffect, useState } from "react";
import ContactList from "./components/ContactsList";
import SearchComp from "./components/SearchComp";

const App = () => {

  const [List, setList] = useState([]);
  const [searchQ, setSearchQ] = useState("");
  // console.log(searchQ)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://6676800f145714a1bd71ee8f.mockapi.io/Contacts");
        setList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-black bg-white min-h-svh">
      <div className="mx-auto w-full sm:w-full md:w-1/2 bg-white min-h-svh pt-[38px]">
        <h1 className="font-semibold text-2xl mx-[24px]">My Contacts</h1>
        <SearchComp searchQ={searchQ} setSearchQ={setSearchQ} />
        <ContactList searchQ={searchQ} List={List} />
      </div>
    </div>
  );
};

export default App;
