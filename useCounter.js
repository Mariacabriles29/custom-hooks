//un custom hook no es mas que una funcion que puede regresar 
//lo que necestimenos que regrese 
import { useState } from "react"
export  const useCounter = (initialValue=10) => {
    const [counter, setCounter] = useState(initialValue);
    //si necesitase incrementar de 2 en 2 o de 10 en 10
    //el valor que mande en el value es la cantidad por la cual se incrementa el contador
    const increment = (value=1) =>{
       
        setCounter(counter + value)
    }

    const decrement = (value=1) => {
        // if(counter===0) return;
        //si es igual a cero decremento 
        setCounter(counter - value)
    }
    //cuando le paso el initialValue lo regreso a su valor original y asi hago el reset
    const reset = () => {
        setCounter(initialValue)
    }
  return{

   counter,
   increment,
   decrement,
   reset

  }
}
