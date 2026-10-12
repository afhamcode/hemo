
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Congratulations! Your Hemo account is created.");
    console.log("Registration form submitted successfully.");
    e.target.reset();
    setShowPassword(false);
  };

  return (
    <form onSubmit={handleSubmit} className="register-page">
      <div className="register-header">
        <h1>Create your Hemo account</h1>
      </div>

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        required
      />

      <label htmlFor="password">Password:</label>
      <input
        type={showPassword ? "text" : "password"}
        name="password"
        id="password"
        required
      />

      <label htmlFor="confirm-password">Confirm Password:</label>
      <input
        type={showPassword ? "text" : "password"}
        name="confirm-password"
        id="confirm-password"
        required
      />

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? "Hide" : "Show"}
      </button>

      <label htmlFor="checkbox">Terms &amp; Conditions</label>
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        required
      />

      <button type="submit">Register</button>

      {error && <p className="register-error" role="alert">{error}</p>}

      {success && (
        <p className="register-success" role="status">{success}</p>
      )}

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
}

export default Register;