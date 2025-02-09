import React from "react";


const Login = () => {
    return (
        <div className="text-center">
            <h1 className="text-2xl font-mono">Login system with react</h1>
            <form action="form">
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;