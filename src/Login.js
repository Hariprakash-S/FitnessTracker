import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, FormHelperText, Grid } from '@mui/material';
import { Google as GoogleIcon, Facebook as FacebookIcon } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '', terms: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let tempErrors = { email: '', password: '', terms: '' };

    if (!email) {
      tempErrors.email = 'Email is required';
      valid = false;
    }

    if (!password) {
      tempErrors.password = 'Password is required';
      valid = false;
    }

    if (!termsAccepted) {
      tempErrors.terms = 'You must accept the terms and conditions';
      valid = false;
    }

    setErrors(tempErrors);

    if (valid) {
      console.log('Form Submitted:', { email, password, termsAccepted });

      if (email === 'admin@example.com' && password === 'admin') {
        localStorage.setItem('userRole', 'admin');
        navigate('/admin-dashboard');
      } else {
        localStorage.setItem('userRole', 'user');
        navigate('/');
      }
    }
  };

  return (
    <div className="login-page">
      <video autoPlay loop muted className="video-background">
        <source src="/training.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
              InputProps={{
                classes: { notchedOutline: 'no-border' }
              }}
              fullWidth
              required
            />
          </div>
          <div className="form-group">
            <TextField
              id="outlined-password-input"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
              InputProps={{
                classes: { notchedOutline: 'no-border' }
              }}
              fullWidth
              required
            />
          </div>
          <div className="form-group">
            <FormControlLabel
              control={
                <Checkbox
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  name="terms"
                  color="primary"
                />
              }
              label="Accept terms and conditions"
            />
            {!!errors.terms && (
              <FormHelperText error>{errors.terms}</FormHelperText>
            )}
          </div>
          <div style={{ paddingBottom: 20 }}>
            <Button type="submit" variant="contained" style={{ backgroundColor: 'blue', color: 'white' }} fullWidth>
              Login
            </Button>
          </div>
          <div className="sign-up-link">
            <Link to="/signup" className="link-text">
              Don't have an account? Sign up
            </Link>
          </div>
          <br/>
        </form>
        <Grid container spacing={2} className="social-login">
          <Grid item xs={12}>
            <Button
              variant="contained"
              style={{ backgroundColor: 'purple', color: 'white' }} 
              fullWidth
              startIcon={<GoogleIcon />}
              onClick={() => console.log('Login with Google')}>
              Continue with Google
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              style={{ backgroundColor: 'purple', color: 'white' }} 
              fullWidth
              startIcon={<FacebookIcon />}
              onClick={() => console.log('Login with Facebook')}
            >
              Continue with Facebook
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default LoginPage;