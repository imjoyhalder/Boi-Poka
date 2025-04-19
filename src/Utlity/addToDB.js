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

const getStoredWishList = () =>{
    const storedWishListStr = localStorage.getItem('wish-list')

    if(storedWishListStr){
        const storedWishList = JSON.parse(storedWishListStr)
        return storedWishList
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

const addToStoredWishList = (id) =>{
    const storedWishList = getStoredWishList()
    if(storedWishList.includes(id)){
        console.log(id, 'Already exists')
        toast('This book is already added to your wish book list')
    }
    else{
        storedWishList.push(id)
        const storedWishListStr = JSON.stringify(storedWishList)
        localStorage.setItem('wish-list',storedWishListStr )
        toast('This book is added to your wish list!')
    }
}

export {addToStoredReadList, getStoredReadList}