import React, { useEffect } from 'react'
import { useUserContext } from '../context/UserContext';
import UserService from '../services/userServices'

function SignedIn() {

  const {currentUser,setCurrentUser,setCurrentUserName,currentUserName} = useUserContext()

  useEffect(()=>{
    const userService = new UserService();
    userService.getById(currentUser.userId).then(res => setCurrentUserName(res.data.data.fullname))
  },[])

  return (
    <div className='signedIn d-flex flex-row gap-3'>
      <div><b>{currentUserName}</b></div>
      <div>Ürün Listesi</div>
    </div>
  )
}

export default SignedIn