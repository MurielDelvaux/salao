import {React, useState} from "react";
import { Row, Col, Modal, ModalHeader, ModalBody, ModalFooter,Button, Form, Label, Input } from 'reactstrap';
import {Calendar} from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { v4 as uuidv4 } from 'uuid';
import { format} from 'date-fns'

export function ModalAgenda({isOpenModal,setIsOpenModal, isEdit, setIsEdit, clientCard, handleEditClientOn}){
    const [nome, setNome] = useState(null);
    const [hora, setHora] = useState(null);
    const [cep, setCep] = useState(null);
    const [telefone, setTelefone] = useState(null);
    const [procedimento, setProcedimento] = useState(null);
    const [cidade, setCidade] = useState(null);
    const [estado, setEstado] = useState(null);    
    const [date, setDate] = useState(new Date('12/10/2021'));
    const [edit, setEdit] = useState(false)
    
   
    
    const addCliente=()=>{
        const formattedDate = format(date, 'dd/MM/yy');
        const novoCliente={
            date: formattedDate,
            id: uuidv4(),
            nome: nome,
            telefone:telefone,
            procedimento: procedimento,
            hora:hora,
            cep: cep,
            cidade: cidade,
            estado:estado,
           
        }
        if(!localStorage.getItem("tabelaCliente")){
            //console.log('EXISTE=>' ,localStorage.tabelaCliente)
            const tabelaCliente = [novoCliente];
            localStorage.tabelaCliente = JSON.stringify(tabelaCliente);
        }else{
            const dataCliente = JSON.parse(localStorage.tabelaCliente);
            dataCliente.push(novoCliente);
            localStorage.tabelaCliente = JSON.stringify(dataCliente);
            
        }
        console.log(formattedDate)
        setIsOpenModal(false);
        setEdit(false)       
    }

    const editClient = ()=>{
        const formattedDate = format(date, 'dd/MM/yy');
        const novoCliente={
            date:formattedDate|| clientCard.date ,
            id: clientCard.id,
            nome: nome||clientCard.name,
            telefone:telefone||clientCard.telefone,
            procedimento:procedimento||clientCard.procedimento,
            hora: hora|| clientCard.hora,
            cep: cep||clientCard.cep,
            cidade: cidade||clientCard.cidade,
            estado:estado||clientCard.estado,
            
        }
        var clientes = JSON.parse(localStorage.tabelaCliente)
        clientes.length>0?clientes.map((e, i)=>{
            if(e.id===clientCard.id){
               clientes[i] = novoCliente
            }
        }):console.log('NAO DEU')
        localStorage.tabelaCliente = JSON.stringify(clientes)
        
        setIsOpenModal(false);
        setEdit(false)    
    }
    async function onBlurCep(e){
        const {value} = e.target;

        const valorCep = value.replace(/[^0-9]/g,'');
        if(valorCep.length!==8){
            return;
        }
        

        const consulta = await fetch(`https://viacep.com.br/ws/${valorCep}/json`)
          .then((res)=> res.json())
          .then((data) => {
              console.log(data)
            return(data);
            });          
            setCidade(consulta.localidade)
            setEstado(consulta.uf)
    }


    

    return(
        <Modal isOpen={isOpenModal}  /* fade={()=>{setOpenAddModal(false)}} */ animation={false} >
        <ModalHeader className="d-flex justify-content-between"style={{backgroundColor:"#18212b", color:"white"}}>
            {isEdit&&!edit?`EDITAR`:'Agendar'}
        </ModalHeader>
            <ModalBody className="d-flex flex-wrap">
                <Col className="d-flex justify-content-center">
                    <div>
                        <Calendar onChange={setDate} disabled={edit}></Calendar>                        
                    </div>
                
                </Col>
               <Col className="d-flex col-sm-12" style={{marginTop:"2em"}}>
                    <Form>
                        <Row form className="d-flex flex-row">
                            <Col>
                                <Label for="enterName">Nome</Label>
                                <Input type="text" name="nome" id="enterName" placeholder={isEdit&&!edit&&clientCard&&clientCard.nome?clientCard.nome: 'Enter Name'} className="form-control" onChange={(e)=>{setNome(e.target.value)}} disabled={edit}/>
                            
                            </Col>
                            <Col style={{marginLeft:"1em"}}>
                                <Label for="enterTel">Telefone</Label>
                                <Input type="text" name="phone" id="enterPhone" placeholder={isEdit&&!edit&&clientCard&&clientCard.telefone?clientCard.telefone: "Enter phone number"} className="form-control" onChange={(e)=>{setTelefone(e.target.value)}} disabled={edit} />
                            </Col>                            
                        </Row>
                    
                        <Row form className="d-flex flex-row ">
                            <Col>
                                <Label for="enterProc" >Procedimento</Label>
                                <select className="form-control" id="exampleFormControlSelect1" placeholder={isEdit&&!edit&&clientCard&&clientCard.procedimento?clientCard.procedimento: ""} className="form-control" onChange={(e)=>{setProcedimento(e.target.value)}} disabled={edit}>
                                    <option>Opções</option>
                                    <option>Coloração</option>
                                    <option>Corte</option>
                                    <option>Alongamento de unhas</option>
                                    <option>Alongamento de cilios</option>
                                    <option>Escova</option>
                                    <option>Maquiagem</option>
                                    <option>Penteado</option>
                                </select>
                            </Col>  
                            <Col  style={{marginLeft:"1em"}}>                                           
                                <Label for="enterZip">CEP</Label>
                                <Input type="text" name="zip"  placeholder={isEdit&&!edit&&clientCard&&clientCard.cep?clientCard.cep:  "Enter zip code" } className="form-control" onChange={(e)=>{setCep(e.target.value)}} disabled={edit} onBlur={onBlurCep} />
                                                                        
                            </Col>                                   
                            <Col  style={{marginLeft:"1em"}}>                                           
                                <Label for="enterH">Horário</Label>
                                <Input type="text" name="horario" placeholder={isEdit&&!edit&&clientCard&&clientCard.hora?clientCard.hora:  "" } className="form-control" onChange={(e)=>{setHora(e.target.value)}} disabled={edit} />
                                                                        
                            </Col>                                   
                        </Row>
                        <Row form className="d-flex flex-row ">
                            <Col>                                           
                                <Label for="enterCity">Cidade</Label>
                                <Input type="text" name="city" id="enterCity" placeholder={isEdit&&!edit&&clientCard&&clientCard.cidade?clientCard.cidade: "Enter city"} className="form-control" onChange={(e)=>{setCidade(e.target.value)}} disabled={edit} value={cidade}/>                                            
                            </Col>
                            <Col style={{marginLeft:"1em"}}>                                           
                                <Label for="enterState">Estado</Label>
                                    <Input type="text" name="estado" id="enterState" placeholder={isEdit&&!edit&&clientCard&&clientCard.estado?clientCard.estado: "Enter state"} className="form-control" onChange={(e)=>{setEstado(e.target.value)}} disabled={edit} value={estado} />                                            
                            </Col>
                        </Row>
                    
                    </Form>
                </Col>
                

                
            </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="secondary"  onClick={()=>{
                        setIsOpenModal(false)
                        setIsEdit(false)
                        setEdit(false)}} >
                        Cancelar
                    </Button>
                    <Button style={{backgroundColor:"#429184"}} variant="primary"  onClick={isEdit&&!edit? editClient:addCliente }>
                        Salvar
                    </Button>
                </ModalFooter>                  
    </Modal>

    )
}