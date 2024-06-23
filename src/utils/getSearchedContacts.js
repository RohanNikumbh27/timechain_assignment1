export const getSearchedContacts = (List, searchQ, setSearchedList) => {
  console.log("searchQ", searchQ);

  const newList = List?.filter((obj) => {
    const lowercaseQ = searchQ?.toLowerCase();
    const lowercaseName = obj?.name.toLowerCase();
    return lowercaseName.includes(lowercaseQ);
  });

  // console.log("newList", newList);
  setSearchedList(newList);
};
