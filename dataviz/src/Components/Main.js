import React from "react";
import axios from "axios";
import "./Main.css";

function Main() {
    React.useEffect(() => {
  async function fetchData() {


    try {
      const response = await axios.get(
        `https://opendata.paris.fr/api/v2/catalog/datasets/espaces_verts/records?limit=100`
      );

      const divRoute = document.getElementById("root");
      response.data.records.forEach((Vert) => {
        const title = document.createElement("h2");
        title.innerText = Vert.record.fields.nom_ev;
        divRoute.appendChild(title);

      });
    } catch (err) {
      console.log(err);
    }
  }
  fetchData();
  });
}

export default Main;

// function Main() {
//   async function fetchData() {
//     try {
//       const response = await axios.get(
//         `https://rickandmortyapi.com/api/character`
//       );

//       const divRoute = document.getElementById("root");
//       response.data.results.forEach((character) => {
//         const title = document.createElement("h2");
//         title.innerText = character.name;
//         divRoute.appendChild(title);
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   }
//   fetchData();
// }

// export default Main;
