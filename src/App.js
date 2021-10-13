import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//componentes
import { Home } from "./components/Home";
import { Login } from "../../my-crud/src/components/Login";
import { AgendaAdmin } from "./components/AgendaAdmin";

function App() {
  console.log('oi')
  console.log(localStorage.tabelaUsuarios);
  if(localStorage.getItem("tabelaUsuarios")){
    console.log('EXISTE=>' ,localStorage.tabelaUsuarios)
  }else{
    console.log("não existe")
    const a = [{
      Id:'1',
      Nome: 'nome',
      Email: 'email',
      Senha: 'senha'  
    }]
    localStorage.tabelaUsuarios = JSON.stringify(a)
  }
  return (
    <>
           <BrowserRouter>
          <Switch>
            <Route path="/home" component={Home}/>   
            <Route path="/login" component={Login}/>    
            <Route path="/agendamento" component={AgendaAdmin}/>        
          
          </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;
