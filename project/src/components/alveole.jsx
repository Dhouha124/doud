/*import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
*/
/*
import React, { useState } from 'react';

const AlveoleForm = ({ ajouterAlveole }) => {
  const [numero, setNumero] = useState('');
  const [nomDefunt, setNomDefunt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!numero || !nomDefunt) return; // Vérifier si les champs sont remplis
    ajouterAlveole({ numero, nomDefunt });
    setNumero(''); // Réinitialiser les champs après l'ajout
    setNomDefunt('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        placeholder="Numéro de l'alvéole"
      />
      <input
        type="text"
        value={nomDefunt}
        onChange={(e) => setNomDefunt(e.target.value)}
        placeholder="Nom du défunt"
      />
      <button type="submit">Ajouter Alvéole</button>
    </form>
  );
};


*/
import React, { useState } from "react";


export const GestionAlveoles = () => {
  const [numero, setNumero] = useState("");
  const [nomDefunt, setNomDefunt] = useState("");
  const [dateDeces, setDateDeces] = useState("");
  const [lieuDeces, setLieuDeces] = useState("");
  const [causeDeces, setCauseDeces] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Vous pouvez envoyer les données de l'alvéole à votre serveur ou effectuer toute autre action requise
    console.log("Numéro de l'alvéole:", numero);
    console.log("Nom du défunt:", nomDefunt);
    console.log("Date de décès:", dateDeces);
    console.log("Lieu de décès:", lieuDeces);
    console.log("Cause de décès:", causeDeces);
    // Réinitialiser le formulaire après soumission
    setNumero("");
    setNomDefunt("");
    setDateDeces("");
    setLieuDeces("");
    setCauseDeces("");
  };

  return (
    <div id="GestionAlveoles">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <h2>Ajouter le Décès aux Alvéoles</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="numero">Numéro de l'alvéole :</label>
                <input
                  type="text"
                  id="numero"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                  className="form-control"
                  placeholder="Entrez le numéro de l'alvéole"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="nomDefunt">Nom du défunt :</label>
                <input
                  type="text"
                  id="nomDefunt"
                  value={nomDefunt}
                  onChange={(e) => setNomDefunt(e.target.value)}
                  className="form-control"
                  placeholder="Entrez le nom du défunt"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="dateDeces">Date de décès :</label>
                <input
                  type="date"
                  id="dateDeces"
                  value={dateDeces}
                  onChange={(e) => setDateDeces(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lieuDeces">Lieu de décès :</label>
                <input
                  type="text"
                  id="lieuDeces"
                  value={lieuDeces}
                  onChange={(e) => setLieuDeces(e.target.value)}
                  className="form-control"
                  placeholder="Entrez le lieu de décès"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="causeDeces">Cause de décès :</label>
                <textarea
                  id="causeDeces"
                  value={causeDeces}
                  onChange={(e) => setCauseDeces(e.target.value)}
                  className="form-control"
                  rows="4"
                  placeholder="Entrez la cause de décès"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary">Enregistrer</button>
              <button type="reset" className="btn-second" >Annuler</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
