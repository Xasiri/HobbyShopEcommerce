import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScrenn from './screens/HomeScrenn';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/product/:id" component={ProductScreen} />

          <Route path="/" component={HomeScrenn} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
