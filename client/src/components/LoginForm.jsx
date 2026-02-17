const LoginForm = ({ email, password, setEmail, setPassword, onSubmit }) => {
    return (
      <form className="loginForm" onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    );
  };
   
  export default LoginForm;