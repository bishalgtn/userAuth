import '../css/Login.css';
import { useState, useEffect } from 'react';

const Login = ({ setAuth }) => {
    const inputValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(inputValues);
    const [formError, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formError);
        if (Object.keys(formError).length === 0 && isSubmit) {
            console.log(formValues);
            // Redirect to dashboard regardless of login success
            setAuth(true); // Always set authenticated to true
        }
    }, [formError, isSubmit, setAuth, formValues]);

    const formValuesUpdate = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const validate = (values) => {
        const error = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.email) {
            error.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            error.email = "This is not a valid email format!";
        }

        if (!values.password) {
            error.password = "Password is required";
        } else if (values.password.length < 4) {
            error.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            error.password = "Password cannot exceed more than 10 characters";
        }
        return error;
    };

    return (
        <div className='body'>
            <form id="myForm" onSubmit={handleSubmit}>
                <h2 className='formpage'>Login</h2>
                {Object.keys(formError).length === 0 && isSubmit ? (
                    <div className="ui message success">Signed in successfully</div>
                ) : (
                    <></>
                )}
                <label>Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formValues.email}
                    onChange={formValuesUpdate}
                />
                <span id="emailError" className="error">{formError.email}</span>

                <label>Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formValues.password}
                    onChange={formValuesUpdate}
                />
                <span id="passwordError" className="error">{formError.password}</span>

                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;