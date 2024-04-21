
import React, { useState } from "react";


export const About = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [cin, setCin] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const [lienActeNaissance, setLienActeNaissance] = useState("");
  const [dateDeces, setDateDeces] = useState("");
  const [lienActeDeces, setLienActeDeces] = useState("");
  const [causeDeces, setCauseDeces] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Vous pouvez envoyer les données du défunt à votre serveur ou effectuer toute autre action requise
    console.log("Nom:", nom);
    console.log("Prénom:", prenom);
    console.log("Numéro CIN:", cin);
    console.log("Date de naissance:", dateNaissance);
    console.log("Lieu de naissance:", lienActeNaissance);
    console.log("Date de décès:", dateDeces);
    console.log("Lieu  de décès:", lienActeDeces);
    console.log("Cause de décès:", causeDeces);
    // Réinitialiser le formulaire après soumission
    setNom("");
    setPrenom("");
    setCin("");
    setDateNaissance("");
    setLienActeNaissance("");
    setDateDeces("");
    setLienActeDeces("");
    setCauseDeces("");
  };

  return (
    <div id="About">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <h2>Enregistrer un défunt</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nom">Nom :</label>
                <input
                  type="text"
                  id="nom"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  className="form-control"
                  placeholder="Entrez le nom du défunt"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="prenom">Prénom :</label>
                <input
                  type="text"
                  id="prenom"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  className="form-control"
                  placeholder="Entrez le prénom du défunt"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="cin">Numéro de CIN :</label>
                <input
                  type="text"
                  id="cin"
                  value={cin}
                  onChange={(e) => setCin(e.target.value)}
                  className="form-control"
                  placeholder="Entrez le numéro de CIN du défunt"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="dateNaissance">Date de naissance :</label>
                <input
                  type="date"
                  id="dateNaissance"
                  value={dateNaissance}
                  onChange={(e) => setDateNaissance(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lienActeNaissance">Lieu  de naissance :</label>
                <input
                  type="text"
                  id="lienActeNaissance"
                  value={lienActeNaissance}
                  onChange={(e) => setLienActeNaissance(e.target.value)}
                  className="form-control"
                  placeholder="Entrez le lieu de naissance du défunt"
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
                <label htmlFor="lienActeDeces">Lieu  de décès :</label>
                <input
                  type="text"
                  id="lienActeDeces"
                  value={lienActeDeces}
                  onChange={(e) => setLienActeDeces(e.target.value)}
                  className="form-control"
                  placeholder="Entrez le lieu de décès  du défunt"
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
