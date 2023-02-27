import React, { ChangeEvent, useState } from "react" ; 
import "../style/formulaire.css";
import photo from"../image/undraw_education_f8ru.svg";


const choixEtuC = "college";
const choixEtul = "lycée";
const choixEtuU = "université";

const reponse = "";
interface Inscription {
    nom:string ,
    prenom: string,
    email:string,
    mdp: string,
    classe:[]  
}


const Inscription = () => {
    const[data,useData] = useState<Inscription>({
        nom : "",
        prenom :"",
        email:"",
        mdp:"",
        classe:[]
    

    })
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

                            <input type="text" 
                                onChange={
                                    (e:ChangeEvent<HTMLInputElement>) =>{
                                        useData({
                                            ...data,
                                            nom:e.target.value
                                        });                                        
                                    }
                                }
                            />
                            <label>Nom</label>
                        </div>
                        <div className="input-box">
                            <input type="text" 
                                  onChange={
                                    (e:ChangeEvent<HTMLInputElement>) =>{
                                        useData({
                                            ...data,
                                            prenom:e.target.value
                                        });

                                    }
                                }
                            />
                            <label>Prenom</label>
                        </div>
                        <div className="input-box">
                            <input type="text" 
                                  onChange={
                                    (e:ChangeEvent<HTMLInputElement>) =>{
                                        useData({
                                            ...data,
                                            email:e.target.value
                                        });

                                    }
                                }
                            
                            />
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <input type="password" 
                                  onChange={
                                    (e:ChangeEvent<HTMLInputElement>) =>{
                                        useData({
                                            ...data,
                                            mdp:e.target.value
                                        });

                                    }
                                }
                            />
                            <label>Mot de Passe </label>

                        </div>
                        
                        
                        <div className="choix">
                            <div>
                                <label> Classe d'étude </label>
                                <select  name="classe"
                                    // onChange={
                                    //     (e:ChangeEvent<HTMLSelectElement>) =>{
                                    //         useData({
                                    //             ...data,
                                    //             classe:e.target.value
                                    //         });
                                    //     }
                                    // }
                                >
                                    <option value="college">collège</option>
                                    <option value="lycée">lycée</option>
                                    <option value="université">université</option>
                                </select>

                            </div>
                            <div>
                            <label> Classe d'étude </label>

                            <select
                                 onChange={
                                    (e:ChangeEvent<HTMLSelectElement>) =>{
                                        console.log(e.target.value);
                                    }
                                }
                            >
                                <option value="">6ème</option>
                                <option value="">5ème</option>
                                <option value="">4ème</option>
                                <option value="">3ème</option>
                            </select>
                            </div>
                            <div>
                            <label> Classe d'étude </label>

                            <select
                                 onChange={
                                    (e:ChangeEvent<HTMLSelectElement>) =>{
                                        console.log(e.target.value);
                                    }
                                }
                            >
                                <option value="">2nd</option>
                                <option value="">1ère</option>
                                <option value="">terminal</option>
                                </select>
                            </div>
                        </div>
                        <div className="validation">
                            <button
                                // onClick={
                                //     () =>{
                                //         console.log(data)
                                //     }
                                // }
                            >
                                valider
                            </button>
                        </div>
                    

                </form>
                </div>

            </div>
            
        </div>
    )
}
export default Inscription ;