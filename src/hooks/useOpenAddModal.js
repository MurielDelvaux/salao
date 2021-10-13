import { useState} from "react";

const useOpenAddModal =()=>{
    const [isOpenModal,setIsOpenModal] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [clientCard, setClientCard] = useState(false)


    const handleEditClientOn = (id)=>{
        const data = JSON.parse(localStorage.tabelaCliente)
        const card = data.find((e)=>e.id===id) 
        setClientCard(card)
        setIsEdit(true)
        setIsOpenModal(true)
    }
    

    return {isOpenModal, setIsOpenModal, handleEditClientOn, isEdit, setIsEdit, setClientCard, clientCard};

}

export default useOpenAddModal;