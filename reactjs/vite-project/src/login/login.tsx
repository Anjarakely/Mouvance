import React from 'react'
import reactLogo from './assets/react.svg'
import './login.css'
function Login() {
  return (
       <div>
        <div className="login-wrap">
	<div className="login-html">
		<input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label htmlFor="tab-1" className="tab">connection :</label>
		<input id="tab-2" type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2" className="tab"></label>
		<div className="login-form">
			<div className="sign-in-htm">
				<div className="group">
					<label htmlFor="user" className="label">Mail:</label>
					<input id="user" type="text" className="input"/>
				</div>
				<div className="group">
					<label htmlFor="pass" className="label">mot de passe:</label>
					<input id="pass" type="password" className="input" data-type="password"/>
				</div>
				<div className="group">
					<input id="check" type="checkbox" className="check" checked/>
					<label htmlFor="check"><span className="icon"></span> Se surfer sur net</label>
				</div>
				<div className="group">
					<input type="submit" className="button" value="Connecter"/>
				</div>
				<div className="hr"></div>
				<div className="foot-lnk">
					<a href="#forgot">Mot de passe oublier ?</a>
				</div>
			</div>
			</div>
		</div>
	</div>
</div>
    
 

       
       
  )
}

export default Login ;
