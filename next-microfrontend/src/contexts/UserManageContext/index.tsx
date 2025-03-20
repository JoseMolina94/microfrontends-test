'use client'
import { createContext, ReactNode, useState } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const UserManageContext = createContext<any>(null)

type UserManageContextProviderProps = {
  children: ReactNode
}

export default function UserManageContextProvider({ children }: UserManageContextProviderProps) {
  const { 
    data: usersList, 
    isLoading: usersLoading, 
    isValidating: usersValidating 
  } = useSWR('/api/users', fetcher);

  const [userSelected, setUserSelected] = useState<any>(null)

  return (
    <UserManageContext.Provider
      value={{
        usersList: usersList?.items || [],
        userSelected,
        setUserSelected,
        usersLoading: (usersLoading || usersValidating)
      }}
    >
      {children}
    </UserManageContext.Provider>
  )
}