import '../css/Login.css'


const Register = () => {
    return (
        <><div className='body'>

            <form id="myForm"><h2>Login Form</h2>
                <label>Email:</label>
                <input type="email" id="email" name="email" required />
                <span id="emailError" className="error"></span>

                <label>Password:</label>
                <input type="password" id="password" name="password" required />
                <span id="passwordError" className="error"></span>

                <input type="submit" value="Submit" />
            </form ></div>
        </>
    );
};

export default Register;