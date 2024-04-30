import React, {useState} from 'react'
import { useRouter } from 'next/navigation'; 
import { supabase } from '@/lib/supabase';

const check_info = () => {
    const [editable, setEditable] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [resultModal, setResultModal]= useState(false);
    const router = useRouter(); 
    const [result, setResult] = useState(true); // State for result header
    const [result_header, setResultHeader] = useState(""); // State for result header
    const [result_msg, setResultMsg] = useState(""); // State for result message
  
    
    const handleEditClick = () => {
      setEditable(!editable);
    };
  
    const handleCloseModal = () => {
      setResultModal(false);
      if(result) router.push('/') 
    };
    const setModalTrigger = (header:string, msg:string, isSuccess:boolean) =>{
      setResult(isSuccess)
      setResultHeader(header); // Set result header state
      setResultMsg(msg); 
      setResultModal(true);
      
    }
  
  
    // for supabase
    const insertRegistration = async() =>{
      try {
        const { data, error } = await supabase
        .from("Student")
        .insert({
          sr_code: '21-22222',
          first_name: 'Bruh',
          last_name: "Wtf",
          program: 'Compsci',
          degree:'Bachelor'
        })
        if(error) throw error
        else setModalTrigger("Success", "Your registration has been completed successfully.", true)
      } 
      catch (e:any) {
        if (e.code === '23505') {
          setModalTrigger("Sr-code already exists", "Please input unique sr-code. If you think this is a problem, please contact the admin.", false)
  
        } else {
          setModalTrigger("Error", "There's an error, please contact the admin.", false)
        }
      }
  
      
      
    }
  
    const handleConfirmClick = () => {
      setShowSuccessModal(true);
      setTimeout(() => {
        // router.push('/');
      }, 2000);
      
    };
}

export default check_info