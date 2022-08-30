import React, { useEffect, useState } from 'react';
import axios from 'axios';

const T = () => {
    const [user, setUser] = useState([]);
    const [inc,Setinc]=useState(0)
   

    const abc=()=>{ 
        if(inc<user.length){
            console.log(user[inc])
            Setinc(inc+1)
        }
    }



    
    const GetQuestion = async () => {

        try {
            const result = await axios.get("http://localhost:3001/QuestionBank");
          setUser(result.data);
        } catch (err) {
            alert(err.message)
        }
    }
    useEffect(() => {
        GetQuestion();
    }, []);
   
  return (
    <div>
        <button onClick={abc}>xc</button>
    </div>
  )
}

export default T