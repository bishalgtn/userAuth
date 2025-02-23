import '../css/Login.css'
import { useState, useEffect } from 'react';

const Register = () => {
    const inputValues = { username: "", email: "", number: "", password: "", rePassword: "" };
    const [formvalues, setformValues] = useState(inputValues);
    const [formError, setformErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setformErrors(validate(formvalues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formError);
        if (Object.keys(formError).length === 0 && isSubmit) {
            console.log(formvalues);
        }
    }, [formError]);

    const formValuesUpdate = (event) => {
        const { name, value } = event.target;
        setformValues({ ...formvalues, [name]: value });
    }

    const validate = (values) => {
        const error = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            error.username = 'username is required';
        }
        if (!values.email) {
            error.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            error.email = "This is not a valid email format!";
        }
        if (!values.number) {
            error.number = 'number is required';
        }
        if (!values.password) {
            error.password = "Password is required";
        } else if (values.password.length < 4) {
            error.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            error.password = "Password cannot exceed more than 10 characters";
        }
        if (!values.rePassword) {
            error.repassword = "This field is required";
        }
        else if (values.password != values.rePassword) {
            error.repassword = 'password must be same';
        }
        return error;
    }

    return (
        <><div className='body'>
            <form id="myForm" onSubmit={handleSubmit}><h2>Register Form</h2>
                {Object.keys(formError).length === 0 && isSubmit ? (<div className="ui message success">Signed in successfully</div>) : (<></>)}
                <label >Name:</label>

                <input type="text" id="username" name="username" value={formvalues.username} onChange={formValuesUpdate} />
                <span id="nameError" className="error">{formError.username}</span>

                <label>Email:</label>
                <input type="email" id="email" name="email" value={formvalues.email} onChange={formValuesUpdate} />
                <span id="emailError" className="error">{formError.email}</span>

                <label>Number:</label>
                <input type="text" id="number" name="number" value={formvalues.number} onChange={formValuesUpdate} />
                <span id="numberError" className="error">{formError.number}</span>

                <label>Password:</label>
                <input type="password" id="password" name="password" value={formvalues.password} onChange={formValuesUpdate} />
                <span id="passwordError" className="error">{formError.password}</span>

                <label>Confirm Password:</label>
                <input type="password" id="confirmPassword" name="rePassword" value={formvalues.rePassword} onChange={formValuesUpdate} />
                <span id="confirmPasswordError" className="error">{formError.repassword}</span>

                <input type="submit" value="Submit" />
            </form ></div>
        </>
    );
};


export default Register;