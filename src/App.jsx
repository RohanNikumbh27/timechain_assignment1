import { useState } from "react";
import ContactList from "./components/ContactsList";
import SearchComp from "./components/SearchComp";

const App = () => {
  const [searchQ, setSearchQ] = useState("");
  console.log(searchQ)
  return (
    <div className="text-black bg-white min-h-svh">
      <div className="mx-auto w-full sm:w-full md:w-1/2 bg-white min-h-svh pt-[38px]">
        <h1 className="font-semibold text-2xl mx-[24px]">My Contacts</h1>
        <SearchComp searchQ={searchQ} setSearchQ={setSearchQ} />
        <ContactList searchQ={searchQ} />
      </div>
    </div>
  );
};

export default App;
