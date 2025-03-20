import getUserService from "@/services/users/getUsers.service";

export async function GET() {
  try {
    const response = await getUserService('josemolina')
  
    return Response.json(response || []);
  } catch (err) {
    return Response.json([]);
  }
}