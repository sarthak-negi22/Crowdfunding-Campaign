import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CustomButton, FormField } from '../components';

const SendComplaints = () => {

  const navigate = useNavigate();
  const [form, setForm] = useState({
    fName: '',
    lName: '',
    email: '',
    feedback: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit =  (e) => {

    e.preventDefault();
    setIsLoading(true);
    navigate('/');
 
  }

  const handleFormFieldChange = (fieldName, e) => {
    setForm({...form, [fieldName]: e.target.value});
  }

  return (
        <div>
    <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text[25x] text-[18px] leading-[38px] text-white">Send us a feedback!</h1>
      </div>

      <form onSubmit= { handleSubmit } className="w-full mt-[65px] flex flex-col gap-[30px]">

        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="First Name *"
            placeholder="John"
            inputType="text"
            value={form.fName} 
            handleChange={(e) => handleFormFieldChange('fName',e)}          
          />
          <FormField
            labelName="Last Name *"
            placeholder="Doe"
            inputType="text"
            value={form.lName}
            handleChange={(e) => handleFormFieldChange('lName',e)}   
          />
        </div>
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Email-id *"
            placeholder="abc123@gmail.com"
            inputType="email"
            value={form.email}           
            handleChange={(e) => handleFormFieldChange('email',e)}   
          />
          </div>
          <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Feedback *"
            placeholder="Share your experience"
            inputType="text"
            value={form.feedback}           
            handleChange={(e) => handleFormFieldChange('feedback',e)}   
          />
          </div>
          <div className="flex justify-center items-center mt-[40px]"> 
            <CustomButton
              btnType="submit"
              title="Submit Feedback"
              styles="bg-[#1dc071]"
            />
            
          </div>
        </form>

      </div>
  );
}

export default SendComplaints