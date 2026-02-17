const SignupForm = ({name, email,password,setName,setEmail,setPassword,onSubmit}) => {
    return ( 
        <form className="signupForm" onSubmit={onSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Sign Up</button>
        </form>
    );
}
 
export default SignupForm;