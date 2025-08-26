import { useState, useEffect } from "react"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Link, Outlet } from "react-router"
import './inputBox.css'

library.add(fas)



function InputBox({type, name, id, value, placeholder, icon}) {
  
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handlePasswordVisibility = (e) => {
        setPasswordVisible(prevState => !prevState)
    }


    return (
        <div className="input-box">
            <FontAwesomeIcon icon={"fa-solid fa-"+icon} className="input-box_icon" />
            <input 
                type={type !== "password" ? type : (passwordVisible ? "text" : "password")}
                name={name}
                id={id}
                defaultValue={value}
                placeholder={placeholder}
            />
            {type === "password" && (
                <FontAwesomeIcon icon={"fa-solid " + (!passwordVisible ? "fa-eye" : "fa-eye-slash")} className="iconEye" onClick={handlePasswordVisibility} />
            )}
        </div>
    )
}

export default InputBox
