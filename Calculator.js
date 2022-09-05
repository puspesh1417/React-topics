import React from 'react'

export const Calculator = () => {

    function sum(a,b){
        let add=a+b;
        return add;
    }
    
    function sub(c,d){
        let substract=c-d;
        return substract;
    }
    function mul(a,b){
        let add=a*b;
        return add;
    }
  return (




    <div>
<ul>
    <li>
       {sum(5,4)}</li>
    <li>   {sub(10,4)}</li>
    <li>   {mul(5,4)}
    </li>
</ul>


    </div>
  )
}
