import React from "react"
import { useState } from "react"

const HookMegaSena = () =>{
    const [numeroMega, setNumeroMega] = useState()
    const [numerosSorteados, setNumerosSorteados] = useState([])

    function sortearNumero(){
        if(numerosSorteados.length<6){
            let sorteado = Math.floor(Math.random()*60)+1
            setNumeroMega(sorteado)
            setNumerosSorteados([...numerosSorteados, sorteado])
        }else{
            alert("Números já sorteados!")
        }
       
    }

    return(
        <div>
          <button onClick={sortearNumero}>Sortear Número</button>
          <h1>Últimos Números sorteados: {numeroMega}</h1>
          <h1>Sorteados: {numerosSorteados.join(' - ')}</h1>
        </div>
    )
}

export default HookMegaSena