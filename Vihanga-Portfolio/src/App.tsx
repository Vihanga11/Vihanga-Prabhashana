import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { FirebaseProvider } from './context/FirebaseContext';
import Layout from './components/Layout';
import Home from './pages/Home';

function App() {
  return (
    <FirebaseProvider>
      <ThemeProvider>
        <Router>
          <Layout>
            <Home />
          </Layout>
        </Router>
      </ThemeProvider>
    </FirebaseProvider>
  );
}

export default App;