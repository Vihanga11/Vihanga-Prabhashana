import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { FirebaseProvider } from './context/FirebaseContext';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';

function App() {
  return (
    <FirebaseProvider>
      <AuthProvider>
        <ThemeProvider>
          <Router>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
              </Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </AuthProvider>
    </FirebaseProvider>
  );
}

export default App;