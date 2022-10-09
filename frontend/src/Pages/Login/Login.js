import {useState} from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        console.log(email,password);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>
                Login
            </h3>
            <label>Email:</label>
            <input
                type="email"
                onChange={(evt)=> setEmail(evt.target.value)}
                value={email}
            />
            <label>Password:</label>
            <input
                type="password"
                onChange={(evt)=> setPassword(evt.target.value)}
                value={password}
            />
            <button>
                Login
            </button>
        </form>
    )
}