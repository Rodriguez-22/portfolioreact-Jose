import { Routes, Route } from 'react-router-dom';
import Contacto from "@/pages/www/contacto/Contacto";
import Home from "@/pages/www/site/Home";
import Pregunta from "@/pages/www/pregunta/Pregunta";
import Experencia from "@/pages/www/experencia/Experencia";

const AppRoutes = () => {
  return (
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/experencia" element={<Experencia />} />
       <Route path="/pregunta" element={<Pregunta />} />
       <Route path="/contacto" element={<Contacto />} />
    </Routes>
  )
}

export default AppRoutes;
