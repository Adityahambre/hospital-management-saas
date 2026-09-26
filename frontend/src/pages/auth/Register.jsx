import { ArrowRight } from "lucide-react";

function Register() {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <span>+</span>
          Carely
        </div>

        <span className="directory-label">GET STARTED</span>

        <h1>Create your account.</h1>

        <p>
          Join a connected healthcare experience built around you.
        </p>

        <form>
          <label>
            Full name
            <input type="text" placeholder="Your full name" />
          </label>

          <label>
            Email address
            <input type="email" placeholder="you@example.com" />
          </label>

          <label>
            Password
            <input type="password" placeholder="Create a password" />
          </label>

          <label>
            Account type

            <select defaultValue="patient">
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="hospital">Hospital</option>
            </select>
          </label>

          <button type="submit">
            Create account
            <ArrowRight size={17} />
          </button>
        </form>

        <p className="auth-switch">
          Already have an account?
          <a href="/login"> Sign in</a>
        </p>
      </div>
    </main>
  );
}

export default Register;