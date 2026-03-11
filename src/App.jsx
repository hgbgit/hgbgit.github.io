import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Importe o seu componente. Ajuste o caminho se ele estiver em outra pasta, como './pages/cor-e-ritmo'
import CorERitmo from './cor-e-ritmo';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* A rota "/" é a página principal. Ela vai carregar apenas o seu componente */}
                <Route path="/" element={<CorERitmo />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;