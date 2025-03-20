import UsersList from "@/components/UsersList";
import UserManageContextProvider from "@/contexts/UserManageContext";

export default function Home() {
  
  return (
    <UserManageContextProvider>
      <div className="w-full p-4" >
        <div className="border-b h-16 flex items-center mb-6" >
          <h1 className="text-4xl font-semibold" >
            Lista de usuarios
          </h1>
        </div>
        
        <UsersList />
      </div>
    </UserManageContextProvider>
  );
}