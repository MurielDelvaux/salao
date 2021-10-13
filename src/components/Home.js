import React from 'react';
import styled from 'styled-components';
import { Container,Row, Col, Button, Card, CardBody} from 'reactstrap';
import Background from '../image/maquiagem.jpg';
import corte from '../image/corteMasculino.jpg';
import cortefem from '../image/cortefeminino.jpg';
import luzes2 from '../image/luzes2.jpg';
import unhas from '../image/unhas.jpg';
import { Instagram, Facebook} from 'react-bootstrap-icons';
import {ModalAgenda} from "./ModalAgenda"
import useOpenAddModal from "../hooks/useOpenAddModal";

export function Home(){
    const Thing =styled.div`        
    .something:hover{
      cursor: pointer;
      filter: brightness(70%);                  
    }  
    `;
    const Botoes =styled.div`        
    .something:hover{
      cursor: pointer;
      filter: brightness(88%);                  
    }  
    `;
    const Photo =styled.div`        
    .somethingpic:hover{
      cursor: pointer;
      filter: brightness(60%);                  
    }  
    `;
    const goFacebook =() =>{
        window.location.assign ("https://www.facebook.com/MuriDelvaux")
    }
    const goInstagram=() =>{
        window.location.assign ("https://www.instagram.com/delvaaux/")
    }
    const goLogin=() =>{
        window.location.assign ("http://localhost:3000/login")
    }
   
    const {isOpenModal, setIsOpenModal, isEdit, setIsEdit, clientCard} = useOpenAddModal();
    return(
        <>
            <Container className="themed-container" fluid={true}>
                <ModalAgenda
                    isOpenModal={isOpenModal}
                    setIsOpenModal={setIsOpenModal}
                    isEdit={isEdit}
                    setIsEdit={setIsEdit}
                    clientCard={clientCard}
                />
                
                <Row  xs="1" style={{height:"100vh", backgroundColor:"#3f3c3c"}} className="justify-content-md-center">
                    <Col className="d-flex flex-no-wrap justify-content-between align-items-center" style={{backgroundColor:"#3f3c3c", width:"100%", height:"6%"}}>
                        <Thing className="d-flex justify-content-between align-items-center">    
                            <Facebook className="something" color="#fff" onClick={goFacebook}/>      
                            <Instagram className="something" color="#fff" style={{marginLeft:"1em"}} onClick={goInstagram}/>                               
                        </Thing>
                        <Botoes>
                            <Button className="something d-flex justify-content-center align-items-center outline-dark" size="sm" style={{backgroundColor:"transparent", color:"#e2a3cb", border:"1px solid #e2a3cb", height:"2em"}} onClick={goLogin}>Fazer login</Button>
                        </Botoes>
                    </Col>
                    <Col className="d-flex flex-column" style={{backgroundImage:`url(${Background})`,backgroundSize:"cover",backgroundPosition:"center", backgroundAttachment:"fixed" ,width:"100%", height:"30em"}}></Col>
                    
                    <Col className="d-flex flex-column" style={{backgroundColor:"#3f3c3c", width:"100%"}}>
                        <div className="d-flex justify-content-center" style={{marginTop:"1em"}}>
                            <h1 style={{color:"#ededed", borderBottom:"2px solid #565656"}}>Sobre o studio</h1>
                        </div>
                        
                        <div className="d-flex flex-column justify-content-center align-items-center" style={{color:"white", marginTop:"1em"}}>
                            <p style={{width:"75%"}}> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat velit magna, placerat hendrerit lacus accumsan sit amet. Nunc tempor velit in orci euismod molestie. Cras lacinia ipsum vel massa ullamcorper sagittis in ac odio. Ut suscipit iaculis ante. Vestibulum fringilla turpis faucibus, venenatis lectus vitae, porta urna. Quisque elit leo, molestie ut tristique commodo, placerat et justo. Fusce nec enim nec tellus consectetur molestie ut non mauris. Nulla tristique turpis et nisl ullamcorper cursus. Maecenas sollicitudin sapien erat, at blandit nisi aliquam molestie.
                            </p>
                            <Botoes>
                                <Button className="something outline-dark" style={{backgroundColor:"transparent", color:"#e2a3cb", border:"1px solid #e2a3cb"}} onClick={()=>{setIsOpenModal(true)}}>Agendar um horário</Button>
                            </Botoes>
                            <p style={{marginTop:"1em"}}/>
                        </div>
                    </Col>
                    <Col className="d-flex flex-column justify-content-center" style={{backgroundColor:"#414141"}}>
                        <div className="d-flex justify-content-center" style={{marginTop:"1em"}}>
                             <h1 style={{color:"#ededed", borderBottom:"2px solid #565656"}}>Serviços</h1>
                        </div>
                        <div className="d-flex justify-content-around align-items-center flex-wrap" style={{marginTop:"1em"}}>
                            <div>
                                <Photo>
                                    <Card className="somethingpic" style={{backgroundColor:"#ededed", marginTop:"0.5em"}}>
                                        <CardBody className="d-flex flex-column">
                                            <div style={{backgroundImage:`url(${cortefem})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", width:"13em", height:"16em"}}></div>
                                            <div className="d-flex justify-content-center">Corte Feminino</div>
                                        </CardBody>
                                    </Card>
                                </Photo>
                            </div>
                            <div>
                                <Photo>
                                    <Card className="somethingpic" style={{backgroundColor:"#ededed", marginTop:"0.5em"}}>
                                        <CardBody className="d-flex flex-column">
                                            <div style={{backgroundImage:`url(${corte})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", width:"13em", height:"16em"}}></div>
                                            <div className="d-flex justify-content-center">Corte masculino</div>
                                        </CardBody>
                                    </Card>
                                </Photo>
                            </div>
                            <div>
                                <Photo>
                                    <Card className="somethingpic" style={{backgroundColor:"#ededed", marginTop:"0.5em"}}>
                                        <CardBody className="d-flex flex-column">
                                            <div style={{backgroundImage:`url(${luzes2})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", width:"13em", height:"16em"}}></div>
                                            <div className="d-flex justify-content-center">Coloração e hidratação</div>
                                        </CardBody>
                                    </Card>
                                </Photo>
                            </div>
                            <div>
                                <Photo>
                                    <Card className="somethingpic" style={{backgroundColor:"#ededed", marginTop:"0.5em"}}>
                                        <CardBody className="d-flex flex-column">
                                            <div style={{backgroundImage:`url(${unhas})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", width:"13em", height:"16em"}}></div>
                                            <div className="d-flex justify-content-center">Unhas</div>
                                        </CardBody>
                                    </Card>
                                </Photo>
                            </div>
                           
                        </div>
                            <p style={{marginTop:"1em"}}/>                            
                    </Col>
                    <Col className="d-flex flex-column" style={{backgroundColor:"#3f3c3c"}}>
                        <div className="d-flex flex-wrap justify-content-between" style={{marginTop:"1em"}}>
                            <div className="d-flex flex-column flex-wrap"style={{marginTop:"1em"}}>
                                <h5 style={{color:"#ededed"}}>Serviços</h5>
                                <a style={{color:"#ededed", fontSize:"0.9em"}}>Hidratação</a>
                                <a style={{color:"#ededed", fontSize:"0.9em"}}>Coloração</a>
                                <a style={{color:"#ededed", fontSize:"0.9em"}}>Corte feminino</a>
                                <a style={{color:"#ededed", fontSize:"0.9em"}}>Corte Masculino</a>
                                <a style={{color:"#ededed", fontSize:"0.9em"}}>Unhas</a>
                                <a style={{color:"#ededed", fontSize:"0.9em"}}>Sobrancelha</a>
                                <a style={{color:"#ededed", fontSize:"0.9em"}}>Maquiagem</a>
                                <a style={{color:"#ededed", fontSize:"0.9em"}}>Alongamento de unhas</a>
                                <a style={{color:"#ededed", fontSize:"0.9em"}}>Alongamento de cílios</a>
                            </div>
                            <div className="d-flex flex-column justify-content-between flex-wrap" style={{marginTop:"1em"}}>
                                <a style={{color:"#ededed", fontSize:"0.9em"}}>Av. João de Camargo, 510 - Centro, Santa Rita do Sapucaí - MG, 37540-000</a>
                                <Thing className="d-flex flex-column" style={{marginTop:"1em"}}>
                                    <div className="d-flex flex-wrap align-items-center">
                                        <Facebook className="something" color="#fff" size="1.8em" onClick={goFacebook}/>  
                                        <a style={{color:"#ededed", fontSize:"0.9em", marginLeft:"1em"}}>Siga-nos no Facebook</a>
                                    </div>
                                    <div className="d-flex flex-wrap align-items-center" style={{marginTop:"1em"}}>
                                        <Instagram className="something" color="#fff" size="1.8em" onClick={goInstagram}/>
                                        <a style={{color:"#ededed", fontSize:"0.9em", marginLeft:"1em"}}>Siga-nos no Instagram</a>
                                    </div>
                                </Thing>
                                   
                             
                            </div>
                        </div>
                        <p style={{marginTop:"1em",borderBottom:"1px solid #565656"}}></p>
                        <p className="d-flex justify-content-center" style={{color:"#ededed", fontSize:"0.9em"}}>Copyright © 2021. All Rights Reserved.</p>
                        
                        
                    </Col>
             
                  

                </Row>

            </Container>
        </>
    );

}