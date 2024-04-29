import { useState, useEffect } from "react"


const ItemCount = ({stock}) => {
    const [count, setCount] = useState(1);

    const addition = () => {
        if (count < stock ){
            setCount(count + 1);
        }
    }
        

    const substraction = () => {
        if (count > 1){
            setCount(count - 1);
        }
    }

  return (
    <div>
        <button onClick={substraction}> - </button>
        <p>{count}</p>
        <button onClick={addition}> + </button>
    </div>
  )
}

export default ItemCount