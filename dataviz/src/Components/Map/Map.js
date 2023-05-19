// Importation des différentes librairies utilisées pour le rendu de la carte : React, Leaflet, Axios.

import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, Polygon, TileLayer, Tooltip } from "react-leaflet";
import { Icon } from "leaflet";
import "./Map.css";
import axios from "axios";

// Constante de la position d'Ada Tech School pour le zoom sur la carte.

const adaPosition = [48.87389115024882, 2.3588821526197985];

// Définition de couleurs pour le dessin des polygones représentant les espaces verts du 75010.

const redOptions = { color: 'red' };
const fillBlueOptions = { fillColor: 'blue' };
const purpleOptions = { color: 'purple' };

// Fonction pour obtenir un code couleur HEX aléatoire.
function getRandomColor() 
{
    let letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (var i = 0; i < 6; i++ ) 
    {
       color += letters[Math.round(Math.random() * 15)];
    }
return color;
}
// Création d'un dictionnaire avec couleur aléatoire pour pouvoir être appelé dans les options du polygone à dessiner sur la
// carte. 

let randomColorOptions = { color: getRandomColor() };

// Couleur de test : code HEX fonctionne.
let testColor = {color: '#05D27C'}




// Function Map pour le rendu de la map.
function Map() {

    //Définition d'une constante pour la position à utiliser pour le dessin des espaces verts ; utilisation de useState.
  const [position, setPosition] = useState([]);

  // const [colorToSet, setColor] = useState({ color : `${}`});

    //Fonction asynchrone pour la récupération des données de la mairie de Paris.
  React.useEffect(() => {
    async function fetchData() {

        // Réponse par Axios pour recevoir les données des espaces verts du 75010.
      const resp = await axios.get(
        `https://opendata.paris.fr/api/v2/catalog/datasets/espaces_verts/records?refine=adresse_codepostal:75010&limit=68`
      );
    
     
      const records = resp.data.records
      
        // Constitution d'un tableau, qui recevra d'autres tableaux contenants les coordonnées de l'API de la mairie
        // de Paris. On doit invertir les données de l'API pour chaque tableau, reçues en latitude/longitude ; Leaflet
        // a besoin de données en longitude/latitude.

        // For loop qui parcourt les résultats de la requête et rassemble les coordonnées de chaque
        // espace vert dans un tableau (intermediateArrayCoordinates)
        let intermediateArrayCoordinates = []
        
        for (let i = 0; i < records.length ; i++){
        const polygon = resp.data.records[i].record.fields.geom.geometry.coordinates
        for(let j=0 ; j < polygon.length ; j++){
         intermediateArrayCoordinates.push(polygon)
        } 
      }

      // Code pour gérer le cas où l'on reçoit les coordonnées en longitude / latitude :
      
      // Création de tableaux vides pour stocker les données et émuler la structure de données attendue
      // par Leaflet.

      // let finalPolyArray = [];
      // let intermediatePolyArray = [];
      // let firstPolyArray = [];
 

      
      // Ensemble de loops forEach pour parcourir la structure de données et invertir les coordonnées.
      // En même temps, appel de la fonction get_random_color() pour générer une couleur aléatoire
      // par polygone à dessiner.

      intermediateArrayCoordinates.forEach(array => {
        array.forEach(anotherArray => {
          anotherArray.forEach(coordinate =>{
            coordinate.reverse()
          })
        })
    })

    console.log(intermediateArrayCoordinates)
    

    // For loop finale qui parcourt de nouveau les résultats de la requête, puis push dans le tableau final.
    
    // intermediatePolyArray.forEach(array =>{
    //   array.forEach(yetAnotherArray => {
    //   let valueToPush = firstPolyArray.splice(0, yetAnotherArray.length)
    //   finalPolyArray.push(valueToPush)
    // })
    // })

    // Tableau à utiliser si besoin d'inverser les coordonnées : 
    // setPosition(finalPolyArray)
        
    // colorArray.forEach(element => {
    //   let colorToUse = colorArray[element]
    //   setColor(colorToUse)
    // })
      setPosition(intermediateArrayCoordinates)
      
    }
    fetchData();
  }, []);
  return (
    // Rendu de la map sur la page et dessin du polygone sur la carte.
    <div>
    {position &&(
    <MapContainer center={adaPosition} zoom={16}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={adaPosition}>
        <Popup>
          ADA TECH SCHOOL
        </Popup>
      </Marker>
      <Polygon pathOptions={randomColorOptions} positions={position}>
      <Tooltip sticky>Espace vert du Xème arrondissement</Tooltip>
      </Polygon>
    </MapContainer>
  )}
  </div>
  )
}

export default Map;

