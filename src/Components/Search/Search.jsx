
// import { useState } from "react";
// import "./Search.css"

// const Search = ({onSearch}) => {
//     const [buscarTermino, setBuscarTermino] = useState("")

//     const handleBuscarChange = (e) => {
//         const termino = e.target.value;
//         setBuscarTermino(termino)
//         onSearch(termino)
//     }
    
//   return (
//     <section className="search">
        
//         <input type="search"
//         placeholder="Buscar por nombre, descripción, marca..."
//         className="search-bar"
//         value={buscarTermino}
//         onChange={handleBuscarChange}
//         />
//     </section>

//   )
// }

// export default Search

import { useState } from "react";
import "./Search.css";

const iconos = [
  "keyboard",
  "mouse",
  "headset",
  "monitor",
  "microphone",
];

const Search = ({ onSearch }) => {
  const [buscarTermino, setBuscarTermino] = useState("");

  const handleBuscarChange = (e) => {
    const termino = e.target.value;
    setBuscarTermino(termino);
    onSearch(termino);
  };

  return (
    <section className="search">
    <div className="icons-track">
        <i className="fas fa-keyboard"></i>
        <i className="fas fa-mouse"></i>
        <i className="fas fa-headphones"></i>
        <i className="fas fa-desktop"></i>
        <i className="fas fa-microphone"></i>

        <i className="fas fa-keyboard"></i>
        <i className="fas fa-mouse"></i>
        <i className="fas fa-headphones"></i>
        <i className="fas fa-desktop"></i>
        <i className="fas fa-microphone"></i>

        <i className="fas fa-keyboard"></i>
        <i className="fas fa-mouse"></i>
        <i className="fas fa-headphones"></i>
        <i className="fas fa-desktop"></i>
        <i className="fas fa-microphone"></i>

        <i className="fas fa-keyboard"></i>
        <i className="fas fa-mouse"></i>
        <i className="fas fa-headphones"></i>
        <i className="fas fa-desktop"></i>
        <i className="fas fa-microphone"></i>

        <i className="fas fa-keyboard"></i>
        <i className="fas fa-mouse"></i>
        <i className="fas fa-headphones"></i>
        <i className="fas fa-desktop"></i>
        <i className="fas fa-microphone"></i>

        <i className="fas fa-keyboard"></i>
        <i className="fas fa-mouse"></i>
        <i className="fas fa-headphones"></i>
        <i className="fas fa-desktop"></i>
        <i className="fas fa-microphone"></i>

        <i className="fas fa-keyboard"></i>
        <i className="fas fa-mouse"></i>
        <i className="fas fa-headphones"></i>
        <i className="fas fa-desktop"></i>
        <i className="fas fa-microphone"></i>

        <i className="fas fa-keyboard"></i>
        <i className="fas fa-mouse"></i>
        <i className="fas fa-headphones"></i>
        <i className="fas fa-desktop"></i>
        <i className="fas fa-microphone"></i>

        <i className="fas fa-keyboard"></i>
        <i className="fas fa-mouse"></i>
        <i className="fas fa-headphones"></i>
        <i className="fas fa-desktop"></i>
        <i className="fas fa-microphone"></i>

        <i className="fas fa-keyboard"></i>
        <i className="fas fa-mouse"></i>
        <i className="fas fa-headphones"></i>
        <i className="fas fa-desktop"></i>
        <i className="fas fa-microphone"></i>

        <i className="fas fa-keyboard"></i>
        <i className="fas fa-mouse"></i>
        <i className="fas fa-headphones"></i>
        <i className="fas fa-desktop"></i>
        <i className="fas fa-microphone"></i>
    </div>

    <div className="search-container">
        <input
            type="search"
            placeholder="Buscar por nombre, descripción, marca ..."
            className="search-bar"
            value={buscarTermino}
            onChange={handleBuscarChange}
        />

        <i className="fas fa-search search-icon"></i>
    </div>
</section>
  );
};

export default Search;