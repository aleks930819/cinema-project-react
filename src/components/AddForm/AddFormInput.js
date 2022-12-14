import { useEffect, useState } from "react";
import ValidationMessage from "../Validation/ValidationMessage";




const AddFormInput = (props) => {

   
    
 

  const element =

    props.element === 'input' ? (

      <input 
      htmlFor={props.htmlFor}
      name={props.name}
      id={props.id}
      type={props.type} 
      placeholder={props.placeholder}
      value={props.values}
      onChange={props.handler}
      onBlur={props.onBlur}
      required
      />

    ) : (
      <textarea 
        id={props.id}
        htmlFor={props.htmlFor}
        name={props.name}
        rows={props.rows || 4}
        onChange={props.handler}
        placeholder={props.placeholder}
        value={props.value}
        required
      />
    );
    
    
    
  return (
    <div>
      <div>
        <label htmlFor={props.id} id={props.id}>{props.label}</label>  
        {element}
      </div>
    </div>
  );


};

export default AddFormInput;
