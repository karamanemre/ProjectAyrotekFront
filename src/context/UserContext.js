const { createContext, useState, useContext } = require("react");

const UserContext = createContext();

export function UserProvider({ children }) {

    const [isLogin,setIsLogin] = useState(true);
    const [currentUser,setCurrentUser] = useState({id:"1"});

  const values = {
    isLogin,setIsLogin,currentUser,setCurrentUser
  };

  return (
    <UserContext.Provider value={values}>{children}</UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}