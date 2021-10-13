import { Container, Row, Button, Card, CardBody,Label, Input, FormGroup, Form, FormText} from "reactstrap";
import {React, useState} from "react";
import styled from 'styled-components';
import { ArrowLeftCircle} from 'react-bootstrap-icons';
import { v4 as uuidv4 } from 'uuid';

export function Login(){
    const [isLogin, setIsLogin]=useState(true);
    const [nome, setNome] = useState(null);
    const [email, setEmail] = useState(null);
    const [senha, setSenha] = useState(null);
    const [emailLogin, setEmailLogin] = useState(null);
    const [senhaLogin, setSenhaLogin] = useState(null);

    const goHome=() =>{
        window.location.assign ("http://localhost:3000/home")
    }
    const addUsuario= ()=>{
        const novoUsuario ={
            Id: uuidv4(),
            Nome: nome,
            Email: email,
            Senha: senha            
        }
        var tabelaUsuarios = JSON.parse(localStorage.tabelaUsuarios);

        tabelaUsuarios.push(novoUsuario)
        localStorage.tabelaUsuarios = JSON.stringify(tabelaUsuarios)
        localStorage.auth = JSON.stringify(novoUsuario)        
    }    

    const loginUsuario = ()=>{
        const tabelaUsuarios = JSON.parse(localStorage.tabelaUsuarios)
        const findUser = tabelaUsuarios.filter((e)=>emailLogin===e.Email);
        const isValidPassword = findUser[0].Senha === senhaLogin
        /* criando sessão */
        const identificacao = findUser[0].Id;
        const uExistente ={
            Id: identificacao,
            Nome: findUser[0].Nome,
            Email: findUser[0].Email,
            Senha: findUser[0].senha 
        }
        localStorage.auth = JSON.stringify(uExistente);
       window.location.href="http://localhost:3000/agendamento"
    }
    const Thing =styled.div`        
    .something:hover{
      cursor: pointer;
      filter: brightness(70%);                  
    }  
    `;
    return(
        <>
            <Container className="themed-container" fluid={true}>
                
                <Row className="d-flex flex-column justify-content-center" style={{backgroundColor:"#18212b", height:"100vh"}}>
                            <div className="d-flex justify-content-between" style={{position:"absolute", top:"1em", right:"1em"}}>
                                <Thing className="d-flex justify-content-center align-items-center">
                                    <ArrowLeftCircle className="something" color="#fff" size="2em" style={{marginLeft:"1em"}} onClick={goHome}/>
                                </Thing>
                                <div>
                                    <Button style={{backgroundColor:"#e2a3cb", color:"#1f2b38", border:"1px solid #e2a3cb" }} onClick={()=>{setIsLogin(false)}}>Sign Up</Button>                  
                                    <Button style={{backgroundColor:"transparent", color:"#e2a3cb", border:"1px solid #e2a3cb"}} className="outline-dark" onClick={()=>{setIsLogin(true)}}>Sign In</Button>
                                </div>
                            </div>
                        <div className="d-flex flex-column align-items-center">  
                            {isLogin?(

                                <Card className="align-items-center col-8 col-md-4" style={{backgroundColor:"#263544"}}>
                                    <CardBody>                                    
                                        <Form>
                                            <FormGroup className="mb-1 mt-2">
                                                <Label style={{color:"#d9dce0"}}>Email address</Label>
                                                <Input type="email" placeholder="Enter email" onChange={(e)=>{setEmailLogin(e.target.value)}}/>
                                                <FormText className="text-muted" >
                                                We'll never share your email with anyone else 
                                                </FormText>
                                            </FormGroup>
                                            <FormGroup className="mb-1">
                                                <Label style={{color:"#d9dce0" }}>Password</Label>
                                                <Input type="password" placeholder="Password" onChange={(e)=>{setSenhaLogin(e.target.value)}}/>
                                            </FormGroup>
                                            <FormGroup check className="mb-4" style={{color:"#d9dce0" }}>
                                                <Input type="checkbox" style={{backgroundColor:"#e2a3cb"}}/>{' '}
                                                Check me out
                                            </FormGroup>
                                            
                                            <FormGroup>
                                                <Button variant="primary" style={{color:"#1f2b38",backgroundColor:"#e2a3cb"}} onClick={loginUsuario}>
                                                    Enter
                                                </Button>
                                            </FormGroup>
                                            
                                            
                                        </Form>
                                        
                                    </CardBody>
                                </Card>
                            ):(
                                <Card className="align-items-center col-8 col-md-4" style={{backgroundColor:"#263544" }}>
                                   
                                    <CardBody>                                
                                        <Form>                                                                        
                                            <FormGroup className="mb-1 mt-2">
                                                <Label style={{color:"#d9dce0"}}>Nome</Label>
                                                <Input type="text" placeholder="Nome completo" onChange={(e)=>{setNome(e.target.value)}}/>                                        
                                            </FormGroup>
                                            <FormGroup className="mb-2">
                                                <Label style={{color:"#d9dce0"}}>Email address</Label>
                                                <Input type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} />                                        
                                            </FormGroup>
                                            <FormGroup className="mb-2">
                                                <Label style={{color:"#d9dce0" }}>Password</Label>
                                                <Input type="password" placeholder="Password" onChange={(e)=>{setSenha(e.target.value)}}/>
                                                <FormText className="text-muted" >
                                                We'll never share your data with anyone else!
                                                </FormText>
                                            </FormGroup>
                                            <FormGroup>
                                                <Button variant="primary" style={{color:"#1f2b38",backgroundColor:"#e2a3cb"}} onClick={addUsuario}>
                                                    Submit
                                                </Button>
                                            </FormGroup>
                                        </Form>
                                    </CardBody>
                                </Card>
                            )}

                        </div>    
                    </Row>    

                
            </Container>
        </>
    )
}