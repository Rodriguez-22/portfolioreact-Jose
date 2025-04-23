import './App.css';
import AppRoutes from './routes/AppRoutes';
import { Header } from './components/www/site/Header';
import Footer from './components/www/site/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router> {/* Asegúrate de envolver toda la app en Router */}
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-6">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;