import React,{useState , useEffect} from 'react'
import './count.css'

   
function Count() {


    let [count, setcount] = useState(0);

  
    const counting = () => {
      setcount(count + 1)
    }


    const update = () => {
       console.log('updated')
      }

    useEffect(()=>{
     

    })

    
    return (
      <>
  
        <div>
          <h1> {count} </h1> 
          <button  onClick={counting} style={{fontSize:'40px', borderRadius:'40px'}}>count</button>
  
          { count == 40 ? <div>count = 40</div> :  <div>count = 0 </div> }
  
        </div>


        <input type="text" name="" id=""  onChange={update} />
    
      </>
  
    );
  }
  
  export default Count;

