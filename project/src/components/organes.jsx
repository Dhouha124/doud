import React, { useState } from "react";

export const GestionDesOrganes = () => {
  const [nom, setNom] = useState("");
  const [typeOrgane, setTypeOrgane] = useState("");
  const [lieuPrelevement, setLieuPrelevement] = useState("");
  const [datePrelevement, setDatePrelevement] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Nom du défunt :", nom);
    console.log("Type d'organe :", typeOrgane);
    console.log("Lieu de prélèvement :", lieuPrelevement);
    console.log("Date de prélèvement :", datePrelevement);
    // Réinitialiser le formulaire après soumission
    setNom("");
    setTypeOrgane("");
    setLieuPrelevement("");
    setDatePrelevement("");
  };

  return (
    <div id="GestionDesOrganes">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <h2>Enregistrer un organe prélevé</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nom">Nom du défunt :</label>
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
                <label htmlFor="typeOrgane">Type d'organe :</label>
                <select
                  id="typeOrgane"
                  value={typeOrgane}
                  onChange={(e) => setTypeOrgane(e.target.value)}
                  className="form-control"
                  required
                >
                  <option value="">Sélectionnez le type d'organe</option>
                  <option value="Coeur">Coeur</option>
                  <option value="Poumons">Poumons</option>
                  <option value="Foie">Foie</option>
                  {/* Ajoutez d'autres options ici */}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="lieuPrelevement">Lieu de prélèvement :</label>
                <input
                  type="text"
                  id="lieuPrelevement"
                  value={lieuPrelevement}
                  onChange={(e) => setLieuPrelevement(e.target.value)}
                  className="form-control"
                  placeholder="Entrez le lieu de prélèvement de l'organe"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="datePrelevement">Date de prélèvement :</label>
                <input
                  type="date"
                  id="datePrelevement"
                  value={datePrelevement}
                  onChange={(e) => setDatePrelevement(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
              <button type="submit" className="btn-primary">Enregistrer</button>
              <button type="reset" className="btn-second">Annuler</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

