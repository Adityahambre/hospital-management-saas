import { ArrowRight, ShieldCheck } from "lucide-react";

function Login() {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <span>+</span>
          Carely
        </div>

        <span className="directory-label">WELCOME BACK</span>

        <h1>Sign in to your account.</h1>

        <p>
          Access your healthcare dashboard and continue your journey.
        </p>

        <form>
          <label>
            Email address
            <input type="email" placeholder="you@example.com" />
          </label>

          <label>
            Password
            <input type="password" placeholder="Enter your password" />
          </label>

          <button type="submit">
            Sign in
            <ArrowRight size={17} />
          </button>
        </form>

        <div className="auth-security">
          <ShieldCheck size={16} />
          Secure healthcare access
        </div>

        <p className="auth-switch">
          Don't have an account?
          <a href="/register"> Create one</a>
        </p>
      </div>
    </main>
  );
}

export default Login;