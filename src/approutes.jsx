import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom"
import { Login } from "./components/login/login.jsx";
import { Cadastros } from "./components/cadastros/cadastros.jsx";
import Home from "./components/home/home.jsx";
import Avaliacao from "./components/avaliacao/avaliacao.jsx";

export function APPRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cadastros" element={<Cadastros/>}/>
                <Route path="/avaliacao" element={<Avaliacao/>}/>
            </Routes>
        </Router>       
    )
}