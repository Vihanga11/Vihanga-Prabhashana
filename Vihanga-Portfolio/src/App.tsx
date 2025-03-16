import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Home />
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;