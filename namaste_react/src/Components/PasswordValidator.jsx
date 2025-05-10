import { useState } from "react"

export default function PasswordValidator(){
    const [password,setPassword] =useState("");
    const [PasswordValidator,setPasswordValidator] = useState(false)

    function hasUpper(str){
        for(let char of str){
            const code = char.charCodeAt(0);
            if(code>=65 && code<=90){
                return true
            }
            else return false;
        }
    }
    function hasNum(str) {
        for (let char of str) {
            if (!isNaN(char) && char !== " ") {
                return true;
            }
        }
        return false;
    }
    
    function hasSplChar(str) {
        const splchars = "!@#$%^&*";
        for (let char of str) {
            if (splchars.includes(char)) {
                return true;
            }
        }
        return false; 
    }
    

    const validations = {
        minlen : password.length>8,
        hasUpperCase : hasUpper(password),
        hasNumber : hasNum(password),
        hasSplCharacter : hasSplChar(password)
    }
    function handleSubmit(e){
        e.preventDefault();
        let user = localStorage.getItem("authentications")?JSON.parse(localStorage.getItem("authentications")):[];

    }
    return(<>
    <section className="container-fluid">
        <div className="row mt-4">
            <div className="col-6 m-auto">
                <div className="card ">
                    <div className="card-header">
                        <h3>Login Form</h3>
                    </div>
                    <div className="card-body">
                        <input type="text" name="usn" id="usn"  placeholder="Enter Username" className="form-control"/>
                        <input type="password" name="pwd" id="pwd" placeholder="Enter Password" className="form-control mt-3" onChange={(e)=>{
                            setPassword(e.target.value);
                            setPasswordValidator(true);
                            }} />
                            {setPasswordValidator && (
                                <div className="mt-3 bg-light p-2">
                                    <strong>Password must contain:</strong>
                                    <ul className="mb-0">
                                        <li style={{color:validations.minlen?"green":"red"}}>Minimum 8 Characters</li>
                                        <li style={{color:validations.hasSplCharacter?"green":"red"}}>Atleast One Special Character</li>
                                        <li style={{color:validations.hasNumber?"green":"red"}}>Atleast One Number</li>
                                        <li style={{color:validations.hasUpperCase?"green":"red"}}>Atleast One Uppercase letter</li>
                                    </ul>
                                </div>
                            )}
                        <button className="btn btn-success mt-3" onSubmit={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>)
}