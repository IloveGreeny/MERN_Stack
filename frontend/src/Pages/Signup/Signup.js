import {useState} from "react";
import {useSignup} from "../../Hooks/UseSignup/UseSignup";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {signup,error,isLoading} = useSignup();

    const handleSubmit = async (evt) => {
      evt.preventDefault();

        await signup(email,password);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>
                Signup
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
            <button disabled={isLoading}>
                SignUp
            </button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}