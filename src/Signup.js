import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, IconButton, InputAdornment, FormHelperText, Grid, Link } from '@mui/material';
import { AccountCircle, Visibility, VisibilityOff, Google as GoogleIcon, Facebook as FacebookIcon } from '@mui/icons-material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
    termsAccepted: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    usernameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
    termsError: '',
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;
    const { username, email, password, confirmpassword, termsAccepted } = formData;

    // Reset errors
    setErrors({
      usernameError: '',
      emailError: '',
      passwordError: '',
      confirmPasswordError: '',
      termsError: '',
    });

    if (!username) {
      setErrors((prevState) => ({ ...prevState, usernameError: 'Username is required.' }));
      valid = false;
    }

    if (!email) {
      setErrors((prevState) => ({ ...prevState, emailError: 'Email is required.' }));
      valid = false;
    }

    if (!password) {
      setErrors((prevState) => ({ ...prevState, passwordError: 'Password is required.' }));
      valid = false;
    }

    if (password !== confirmpassword) {
      setErrors((prevState) => ({ ...prevState, confirmPasswordError: 'Passwords do not match.' }));
      valid = false;
    }

    if (!termsAccepted) {
      setErrors((prevState) => ({ ...prevState, termsError: 'You must accept the terms and conditions.' }));
      valid = false;
    }

    if (valid) {
      try {
        const response = await axios.post('http://localhost:9001/reg', formData);
        console.log('User registered:', response.data);
        alert('Registration successful');
        navigate('/');
      } catch (error) {
        console.error('There was an error registering the user!', error);
        alert('Registration failed');
      }
    }
  };

  return (
    <div className="sign-up-page">
      <video autoPlay loop muted className="video-background">
        <source src="/training.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="sign-up-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <TextField
              label="Username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              error={!!errors.usernameError}
              helperText={errors.usernameError}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              fullWidth
              required
            />
          </div>
          <div className="form-group">
            <TextField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.emailError}
              helperText={errors.emailError}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              fullWidth
              required
            />
          </div>
          <div className="form-group">
            <TextField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.passwordError}
              helperText={errors.passwordError}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              fullWidth
              required
            />
          </div>
          <div className="form-group">
            <TextField
              label="Confirm Password"
              type={showPassword ? 'text' : 'password'}
              name="confirmpassword"
              value={formData.confirmpassword}
              onChange={handleChange}
              error={!!errors.confirmPasswordError}
              helperText={errors.confirmPasswordError}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              fullWidth
              required
            />
          </div>
          <div className="form-group">
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  name="termsAccepted"
                  color="primary"
                />
              }
              label="Accept terms and conditions"
            />
            {!!errors.termsError && (
              <FormHelperText error>{errors.termsError}</FormHelperText>
            )}
          </div>
          <div className="form-group">
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign Up
            </Button>
          </div>
          <div className="form-group">
            <Link href="/login" variant="body2">
              Already have an account? Log in
            </Link>
          </div>
        </form>
        <Grid container spacing={1} className="social-login">
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              startIcon={<GoogleIcon />}
              onClick={() => console.log('Sign Up with Google')}
            >
              Continue with Google
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              startIcon={<FacebookIcon />}
              onClick={() => console.log('Sign Up with Facebook')}
              style={{ backgroundColor: '#3b5998' }}
            >
              Continue with Facebook
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SignUpPage;
