import '../css/Login.css'
import { useState, useEffect } from 'react';

const Login = () => {
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
            <form id="myForm" onSubmit={handleSubmit}><h2 className='formpage'>Login</h2>
                {Object.keys(formError).length === 0 && isSubmit ? (<div className="ui message success">Signed in successfully</div>) : (<></>)}
                <label>Email:</label>
                <input type="email" id="email" name="email" value={formvalues.email} onChange={formValuesUpdate} />
                <span id="emailError" className="error">{formError.email}</span>

                <label>Password:</label>
                <input type="password" id="password" name="password" value={formvalues.password} onChange={formValuesUpdate} />
                <span id="passwordError" className="error">{formError.password}</span>

                <input type="submit" value="Submit" />
            </form ></div>
        </>
    );
};


export default Login;