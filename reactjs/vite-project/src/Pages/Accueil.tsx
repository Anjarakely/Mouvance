import React from "react";
import"./Accueil.css";
import Images from "../Images/video1.mp4";
function Accueil(){
    return(
        <div className="corps">
    <div className="haute">
        <div className="aona">
           {/* <video src={Images}></video> */}
        </div>
        <div className="deaona">
            <div className="sary">
             </div>
             <div className="intro">
                <h1 className="text1"><em>e-bosy</em></h1>
                <div className="text-intro">
                    <p>
                    " Apud has gentes, quarum exordiens initium ab 
                    Assyriis ad Nili cataractas porrigitur et confinia 
                    Blemmyarum, omnes pari sorte sunt bellatores seminudi coloratis 
                    sagulis pube tenus amicti, equorum adiumento pernicium graciliumque 
                    camelorum per diversa se raptantes, in tranquillis vel turbidis rebus: 
                    nec eorum quisquam aliquando stivam adprehendit vel arborem colit aut
                     arva subigendo quaeritat victum, sed errant semper per spatia longe lateque 
                     distenta sine lare sine"
                    </p>
                </div>
                <button className='connecter'>
                    se connecter
                </button>
                </div> 
        </div>
             
             </div>
            </div>

        
    );
}
export default(Accueil);