
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
    }
    else{
        strodeList.push(id)
        const storedListStr = JSON.stringify(strodeList)
        localStorage.setItem('read-list', storedListStr)
    }
}
export {addToStoredReadList, getStoredReadList}