const { createContext, useState, useContext } = require("react");

const UserContext = createContext();

export function UserProvider({ children }) {

    const [isLogin,setIsLogin] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const [currentUserName,setCurrentUserName] = useState(false);
    const [currentUser,setCurrentUser] = useState({id:"",token:"",fullname:""});

  const values = {
    isLogin,setIsLogin,currentUser,setCurrentUser,currentUserName,setCurrentUserName,isLoading,setIsLoading
  };

  return (
    <UserContext.Provider value={values}>{children}</UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}