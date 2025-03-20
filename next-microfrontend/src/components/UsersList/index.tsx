'use client'
import { useContext } from "react"
import { UserManageContext } from "@/contexts/UserManageContext"
import UserCard from "../UserCard"

export default function UsersList () {
  const { usersList, usersLoading } = useContext(UserManageContext)

  return ( !usersLoading &&
    (
      <div className="grid-ajust" >
        {
          usersList.map((user: any, index: number) => (
            <UserCard 
              key={`user-card-${index}`} 
              user={user}
            />
          ))
        }
      </div>
    )
  )
}