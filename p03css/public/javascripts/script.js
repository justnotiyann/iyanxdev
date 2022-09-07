// const getFetch = async () => {
//   let url = "https://pokeapi.co/api/v2/pokemon/ditto";
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// console.log(getFetch());

const getFetch = async (poke) => {
  const result = setTimeout(async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${poke}`;
    const res = await fetch(url);
    const toJson = await res.json();
    console.log(toJson);
  }, "5000");
  if (!result) throw console.log(error.message);
};
const data = getFetch("ditto").then((data) => console.log(data));
