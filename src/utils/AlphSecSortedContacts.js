const AlphSecSortedContacts = (List, AlpArray) => {
  return iterateOverAlphabets(List, AlpArray);
};

const ContactsWithAlphabetStarting = (List, Alphabet) => {
  const temp = List.filter((el) => el.name.startsWith(Alphabet.toUpperCase()));
  return temp;
};

const sortContactsArrayWAlphabet = (List, alphab) => {
  // 2
  //second last
  const PArray = ContactsWithAlphabetStarting(List, alphab);
  const personObjandAlphabet = {
    Alphabet: alphab,
    PersonsArray: [...PArray],
  };
  return personObjandAlphabet;
};

const iterateOverAlphabets = (List, alphabetsArray) => {
  // 1
  //Initialy executes but last evaluates
  const TempArr = [];
  alphabetsArray.map((Alph) => {
    const t = sortContactsArrayWAlphabet(List, Alph);
    TempArr.push(t);
  });

  // const TempArr2 = JSON.stringify(TempArr);
  return TempArr;
};

export default AlphSecSortedContacts;
