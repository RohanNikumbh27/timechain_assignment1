import { alphabetsArray } from "../constants/Constants";

export const newSchemaData = (List) => {
  const arr = [];
  alphabetsArray.map((alph) => {
    const ConctsofAlph = List.filter((obj) =>
      obj.name.startsWith(alph.toUpperCase())
    );
    return arr.push({
      Alphabet: alph,
      PersonsArray: [...ConctsofAlph],
    });
  });
  return arr;
};
