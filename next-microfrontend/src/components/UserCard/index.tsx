'use client'
import { UserManageContext } from "@/contexts/UserManageContext"
import Image from "next/image"
import { useContext } from "react"

type UserCardProps = {
  user: any
}

export default function UserCard ({ user } : UserCardProps) {
  const { setUserSelected } = useContext(UserManageContext)

  return (
    <div 
      className="p-2 trigger border hover:bg-gray-300 rounded-md w-full flex flex-col gap-2 items-center cursor-pointer"
      onClick={() => setUserSelected(user)}
    >
      <Image
        src={user.avatar_url}
        alt={user.login}
        width={100}
        height={100}
        className="rounded-full"
      />
      <span>
        {user.login}
      </span>

      {
        <span className="action text-sm text-blue-600" >
          Ver detalles
        </span>
      }
    </div>
  )
}