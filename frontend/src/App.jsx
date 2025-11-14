import "./App.css";

function App() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");
    const response = await fetch("http://localhost:3000/", {
      body: JSON.stringify({ username, password }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(`Username : ${username}`);
    console.log(`Password : ${password}`);

    console.log(response);
    console.log(`Form Submitted`);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Login</h2>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <button type="submit">Sign in</button>
          <p>
            Don't have an account? <a href="#"> Sign up</a>{" "}
          </p>
        </fieldset>
      </form>
    </>
  );
}

export default App;
