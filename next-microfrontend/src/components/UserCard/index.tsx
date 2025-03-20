'use client'
import Image from "next/image"

type UserCardProps = {
  user: any
}

export default function UserCard ({ user } : UserCardProps) {

  return (
    <div className="p-2 border hover:bg-gray-300 rounded-md w-full flex flex-col items-center cursor-pointer" >
      <Image
        src={user.avatar_url}
        alt={user.login}
        width={100}
        height={100}
        className="rounded-full"
      />
      {user.login}
    </div>
  )
}