import { useState } from "react";
export const useForm = (initialForm={}) => {
    const [formState, setFormState] = useState(initialForm);
    
     
      //creando unan funcion que me permita hacer cambio de caulquier input
      const onInputChange = ({ target }) => {
        const { name, value } = target;
    
        setFormState({
          ...formState,
          //para que no repitan los nombres aplico propiedades computadas de los objetos
          [name]: value,
        });
      };

      const onResetForm = () =>{
      setFormState(initialForm);
  
      }
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  }
}
