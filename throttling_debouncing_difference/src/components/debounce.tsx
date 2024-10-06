

let timer:any;
const debounceMethod = (setDebounceCount:React.Dispatch<React.SetStateAction<number>>)=>{
    if(timer){
        clearTimeout(timer);
    }
    timer = setTimeout(()=>{
            setDebounceCount((prev:number)=>prev+1)
        },1000)
}

export default debounceMethod;