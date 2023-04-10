import Create from './components/cadastro/create'
import './App.css'
import Read from './components/read'
import Mainav from './components/header/mainvav'
import { Banner } from './components/banner/banner'
import { Footer } from './components/footer/footer'
import { Sobre } from './components/sobre/sobre'
import { Avaliae } from './components/avaliae/avaliae'
import { Servico } from './components/servico/servico'
import { Equipe } from './components/equipe/equipe'
import { Contato } from './components/contato/contato'
import { Login } from './components/login/login'
import { Cadastros } from './components/cadastros/cadastros'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import { APPRoutes } from './approutes'
import Home from './components/home/home'
import Avaliacao from './components/avaliacao/avaliacao'

function App() {
  return (
    <div>
      <Mainav/>
      <Banner/>
      <APPRoutes/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Footer/>
    </div>
  )
}

export default App