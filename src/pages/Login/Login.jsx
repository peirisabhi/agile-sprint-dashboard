import React, { useState } from 'react';
import { useAuth } from '../../auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
  // const [loading, setLoading] = useState(false);
  // const { login } = useAuth();
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setError('');
    // setLoading(true);
    //
    // try {
    //   const success = await login(email, password);
    //   if (!success) {
    //     setError('Invalid email or password');
    //   }
    // } catch (err) {
    //   setError('Failed to login');
    // }
    //
    // setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <img src="/logo.png" alt="Sprint IQ" className="login-logo" />
          <h2>Welcome Back</h2>
          <p>Sign in to your Sprint IQ Dashboard</p>
        </div>

        {/*{error && <div className="alert alert-danger">{error}</div>}*/}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>


          <button
            type="submit"
            className="btn btn-primary w-100"

          >
            {/*{loading ? 'Signing in...' : 'Sign In'}*/}
            Sign In
          </button>
        </form>


      </div>
    </div>
  );
};

export default Login;