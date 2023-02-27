import React from "react" ; 
import "../style/formulaire.css";
import photo from"../image/undraw_education_f8ru.svg";

const choixEtuC = "college";
const choixEtul = "lycée";
const choixEtuU = "université";

const reponse = "";


const Inscription = () => {
    return(
        <div className="global-form">
             <div className="photo">
                <img src={photo} />
            </div> 
            <div className="formulaire">
            <p>Inscription</p>
                <div>

                    <form className="form">
                        <div className="input-box">

                            <input type="text" />
                            <label>Nom</label>
                        </div>
                        <div className="input-box">
                            <input type="text" />
                            <label>Prenom</label>
                        </div>
                        <div className="input-box">
                            <input type="text" />
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <input type="text" />
                            <label>Mot de Passe </label>

                        </div>
                        <div className="input-box">
                            <input type="text" />
                            <label>Mot de Passe </label>

                        </div>
                        
                        <div className="choix">
                            <div>
                                <label> Classe d'étude </label>
                                <select>
                                    <option value="college">collège</option>
                                    <option value="lycée">lycée</option>
                                    <option value="université">université</option>
                                </select>

                            </div>
                            <div>
                            <label> Classe d'étude </label>

                            <select>
                                <option value="">6ème</option>
                                <option value="">5ème</option>
                                <option value="">4ème</option>
                                <option value="">3ème</option>
                            </select>
                            </div>
                            <div>
                            <label> Classe d'étude </label>

                            <select>
                                <option value="">2nd</option>
                                <option value="">1ère</option>
                                <option value="">terminal</option>
                                </select>
                            </div>
                        </div>
                    

                </form>
                </div>

            </div>
            
        </div>
    )
}
export default Inscription ;