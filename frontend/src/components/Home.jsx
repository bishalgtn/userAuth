

const Home = ({ setAuth }) => {
    return (
        <>
            <h1>Dashboard</h1>
            <h2>Welcome to the Dashboard!</h2>
            <input className="form" type="submit" value="Logout" onClick={() => {
                setAuth(false); // Log out the user
            }} />
        </>
    );
};

export default Home;