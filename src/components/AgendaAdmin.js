import {React, useState, useEffect} from "react";
import styled from 'styled-components';
import { Container,Row, Col,Card, CardBody, Button } from 'reactstrap';
import { BoxArrowInRight, Dash} from 'react-bootstrap-icons';
import {ModalAgenda} from "./ModalAgenda"
import useOpenAddModal from "../hooks/useOpenAddModal";

export function AgendaAdmin(){
    const {isOpenModal, setIsOpenModal, handleEditClientOn, isEdit, setIsEdit, clientCard} = useOpenAddModal();
    const [cards,setCards] = useState(null)
    const Thing =styled.div`        
    .something:hover{
      cursor: pointer;
      filter: brightness(70%);                  
    }  
    `;
    const logout =() =>{
        localStorage.removeItem("auth")
        window.location.assign ("http://localhost:3000/home")
    }
    const removeCard =(id)=>{
        const data = cards.filter((e)=>e.id!==id)
        localStorage.tabelaCliente = JSON.stringify(data)
        setCards(data)
    }
    useEffect(()=> {
        if(!localStorage.getItem('tabelaCliente')){
            setCards(null)
        }else{
            let data = JSON.parse(localStorage.tabelaCliente)
            setCards(data)
         }
    },[localStorage.tabelaCliente])
    return(
        <>
            <Container className="themed-container" fluid={true}>
                <Row className="d-flex flex-wrap" xs="1" style={{backgroundColor:"#18212b",minHeight:"100vh"}}>
                   <Col className="d-flex flex-wrap  flex-column">
                       <Row className="d-flex align-items-start" style={{marginTop:"1em"}}>                            
                            <Thing>
                                <BoxArrowInRight className="something" color="#fff" size={25} onClick={logout} />
                            </Thing>
                       </Row>
                   
                        <Col className="d-flex justify-content-around flex-wrap" style={{marginTop:"0.5em"}}>
                            <ModalAgenda
                                isOpenModal={isOpenModal}
                                setIsOpenModal={setIsOpenModal}
                                isEdit={isEdit}
                                setIsEdit={setIsEdit}
                                clientCard={clientCard}
                            />
                            
                                <Card className="d-flex col-md-9 col-8" style={{backgroundColor:"#263544", marginTop:"0.5em"}}>
                                    <CardBody>
                                        <div className="d-flex flex-wrap justify-content-end">
                                            <Button style={{backgroundColor:"#e2a3cb", color:"#18212b", border:"1px solid #e2a3cb", fontSize:"0.9em",fontFamily:"Josefin Sans"}} onClick={()=>{setIsOpenModal(true)}}>Agendar</Button>                  
                                        </div>
                                        {cards&&cards.length>0&&
                                            cards.map((e)=>{
                                            return(
                                                <div className="d-flex justify-content-center mt-3" key={e.id}>
                                                    <Card body style={{backgroundColor:"rgb(255,255,255,0.2)",color:"white", cursor:'pointer'}} onClick={()=>{handleEditClientOn(e.id)}}>
                                                        <div className="d-flex flex-wrap justify-content-between ">                       
                                                            <h5>{`${e.nome} - ${e.procedimento}`}</h5> 
                                                            <div className="d-flex flex-wrap ">
                                                                <Button className="d-flex justify-content-center align-items-center" color="danger" style={{fontSize:"0.7em"}} onClick={()=>{
                                                                    removeCard(e.id)
                                                                }} >
                                                                    <Dash color="#fff" size={20} /><span className="d-md-block d-none col-sm-9">Remover</span>
                                                                </Button>
                                                            </div>                          
                            
                                                        </div>
                                                        <div>        
                                                            <h5 style={{fontSize:"1em",fontFamily:"Josefin Sans"}}>{`${e.date} às ${e.hora} `}</h5>              
                                                            <h5 style={{fontSize:"0.9em",fontFamily:"Josefin Sans"}}>{`${e.cidade} - ${e.estado}`}</h5>

                                                        </div>
                                                    </Card>
                                                </div>
                                            )})}                                                   
                                                                                         
                                                                    
                                    </CardBody>
                                </Card>
                                               
                        </Col>
                        <p style={{marginTop:"1em",borderBottom:"1px solid #565656"}}></p>
                        <p className="d-flex justify-content-center" style={{color:"#ededed", fontSize:"0.9em"}}>Copyright © 2021. All Rights Reserved.</p>
                        
                   </Col>
                    
                </Row>
            </Container>
        </>
    )
}