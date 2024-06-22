// import { useEffect, useState } from "react";
// import Person from "./Person";

// const ContactList = () => {
//   const [List, setList] = useState([]);
//   const [sortedContactsArray, setSortedContactsArray] = useState([]);
//   const alphabetsArray = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch(
//         "https://6676800f145714a1bd71ee8f.mockapi.io/Contacts"
//       );
//       const data = await res.json();
//       setList(data);
//     };
//     fetchData();
//     iterateOverAlphabets(List, alphabetsArray);
//   }, []);

//   //   const ContactsWithAlphabetStarting = (List, Alphabet = "a") => {
//   //     console.log("temp", temp);
//   //     return temp;
//   //   };

//   //   const sortContactsArrayWAlphabet = (List, alphab) => {
//   //     const PArray = List.filter((elt) => console.log("Pays", elt.name));
//   //     // el.name.startsWith(alphab.toUpperCase());

//   //     const personWithAlphabet = {
//   //       Alphabet: alphab,
//   //       PersonsArray: [PArray],
//   //     };
//   //     return personWithAlphabet;
//   //   };

//   //   const iterateOverAlphabets = (List, alphabetsArray) => {
//   //     const TempArr = [];
//   //     alphabetsArray.map((Alph) => {
//   //       const t = sortContactsArrayWAlphabet(List, Alph);
//   //       TempArr.push(t);
//   //     });

//   //     setSortedContactsArray(TempArr);
//   //   };

//   const recentContacts = List.slice(0, 3);
//   //   console.log("sortedContactsArray", sortedContactsArray);

//   return (
//     <>
//       <div>
//         <h1>Recent</h1>
//         {/* Recent 3 Contacts (Random) */}
//         <div>
//           <ul>
//             {recentContacts.map((Contact) => (
//               <li key={Contact.id}>
//                 <Person Contact={Contact} />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div className="bg-red-400 h-50 w-full">
//         <h1>Recent</h1>
//         {/* Recent 3 Contacts (Random) */}
//         <div>
//           <ul>
//             {/* {sortedContactsArray.map((el) => (
//               <li key={el.id}>
//                 <h1>{el.Alphabet}</h1>
//                 <div className="bg-red-700 h-50 w-full">
//                   <ul>
//                     {el.PersonsArray.map((ell) => {
//                       <li className="text-black">{ell.name}</li>;
//                     })}
//                   </ul>
//                 </div>
//               </li>
//             ))} */}

//             {sortedContacts.map((Contact) => (
//               <li key={Contact.id}>
//                 <Person Contact={Contact} />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContactList;

// {
//   /* <div className="">
//   <h3>Starting alphabate of the alphabetically sorted contacts ex: A </h3>
//   <div>
//     <div>
//       <ul>
//         {sortedContacts.map((Contact) => (
//           <li key={Contact.id}>
//             <Person Contact={Contact} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   </div>
// </div>; */
// }
