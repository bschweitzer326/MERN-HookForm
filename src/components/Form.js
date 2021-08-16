import React, {useState} from 'react';

const Form = (props) => {

    const {input, setInput} = props;

    const [firstName, setfirstName] = useState("");
    const [firstNameError, setfirstNameError] = useState("");

    const [lastName, setlastName] = useState("");
    const [lastNameError, setlastNameError] = useState("");

    const [email, setemail] = useState("");
    const [emailError, setemailError] = useState("");

    const [password, setpassword] = useState("");
    const [passwordError, setpasswordError] = useState("");

    const [confirmPassword, setconfirmPassword] = useState("");
    const [confirmPasswordError, setconfirmPasswordError] = useState("");

    const onChange = (e) => {
        setInput({
            ...input, [e.target.name]: e.target.value
        });
    }

    const handlefirstName = (e) => {
        setfirstName(e.target.value);
        if(e.target.value.length < 2) {
            setfirstNameError("First Name must be at least 2 characters");
        } else {
            setfirstNameError(null);
        }
    }

    const handlelastName = (e) => {
        setlastName(e.target.value);
        if(e.target.value.length < 2) {
            setlastNameError("Last Name must be at least 2 characters");
        } else {
            setlastNameError(null);
        }
    }

    const handleemail = (e) => {
        setemail(e.target.value);
        if(e.target.value.length < 2) {
            setemailError("Email must be at least 2 characters");
        } else {
            setemailError(null);
        }
    }

    const handlepassword = (e) => {
        setpassword(e.target.value);
        if(e.target.value.length < 8) {
            setpasswordError("Password must be at least 8 characters");
        } else {
            setpasswordError(null);
        }
    }

    const handleconfirmPassword = (e) => {
        setconfirmPassword(e.target.value);
        if(e.target.value != password ) {
            setconfirmPasswordError("Password must match");
        } else {
            setconfirmPasswordError(null);
        }
    }

    return(
        <form>
            <div className="form-group">
                <label htmlFor="firstName">First Name: </label>
                <input onChange={onChange, handlefirstName} type="text" name="firstName"/>
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError}</p> :
                    ''
                }
            </div>

            <div className="form-group">
                <label htmlFor="lastName">Last Name: </label>
                <input onChange={onChange, handlelastName} type="text" name="lastName"/>
                {
                    lastNameError ?
                    <p style={{color:'red'}}>{lastNameError}</p> :
                    ''
                }
            </div>

            <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input onChange={onChange, handleemail} type="email" name="email"/>
                {
                    emailError ?
                    <p style={{color:'red'}}>{emailError}</p> :
                    ''
                }
            </div>

            <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input onChange={onChange, handlepassword} type="password" name="password"/>
                {
                    passwordError ?
                    <p style={{color:'red'}}>{passwordError}</p> :
                    ''
                }
            </div>

            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password: </label>
                <input onChange={onChange, handleconfirmPassword} type="password" name="confirmPassword"/>
                {
                    confirmPasswordError ?
                    <p style={{color:'red'}}>{confirmPasswordError}</p> :
                    ''
                }
            </div>

            <div>
                <h2>Results</h2>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm  Password: {confirmPassword}</p>
            </div>
            
        </form>
        
    );
}

export default Form;