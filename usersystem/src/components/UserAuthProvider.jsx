import React, { createContext, useContext } from "react";

const useAuthContext = createContext();
export function UserAuthProvider({ Children }) {
  return <useAuthContext.Provider>{Children}</useAuthContext.Provider>;
}

export function UseAuth() {
  return useContext(useAuthContext);
}
