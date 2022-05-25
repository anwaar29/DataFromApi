import React, { useContext } from 'react'
import { anr } from './Data'
const Bollywood = () => {
    const[name,setName]=useContext(anr)
  return (
    <div>

    

        {name.map(item=><img src={item.ImageAsset1} alt='BollyImg'/>)}
        
    </div>
  )
}

export default Bollywood