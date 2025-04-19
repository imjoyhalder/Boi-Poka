import { toast } from "react-toastify"

const getStoredReadList = () =>{
    // read list form localStorage
    const storedListStr = localStorage.getItem('read-list')
    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
        return storedList
    }
    else{
        return []
    }
}

const addToStoredReadList = (id) =>{
    const strodeList = getStoredReadList(); 
    if(strodeList.includes(id)){
        console.log(id,' already exists');
        toast('This book is already added to your read list!')
    }
    else{
        strodeList.push(id)
        const storedListStr = JSON.stringify(strodeList)
        localStorage.setItem('read-list', storedListStr)
        // ideally trigger toast form the component 
        toast('This book is added to your read list!')
    }
}
export {addToStoredReadList, getStoredReadList}