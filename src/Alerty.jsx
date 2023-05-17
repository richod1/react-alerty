import {useState,useEffect} from 'react'

 const Alert=({isDefaultShown=false, type, message,timeout=250})=>{
    const [isShown,setIsShown]=useState(isDefaultShown);
    const [isLeaving,setIsLeaving]=useState(false);

    var timeoutId=null;
    useEffect(()=>{
        setIsShown(true);
        return ()=>{
            clearTimeout(timeoutId)
        }
    },[isDefaultShown,timeout,timeoutId]);

    const closeAlert=()=>{
        setIsLeaving(true);
        timeoutId=setTimeout(()=>{
            setIsLeaving(false);
            setIsShown(false)
        },timeout)
    }

    return(
        isShown && (
            <div className={`alert ${type} ${isLeaving ? 'leaving' : ''}`}
            role="alert"
          >
               <button className='close' onClick={closeAlert}>{message}</button>
            </div>
        )

    )
}

export default Alert;