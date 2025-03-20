

export default async function getUserService (searchParam: string) {
  try {
    return await fetch(`https://api.github.com/search/users?q=${searchParam}`).then(data => data.json())
  } catch (err: any) {
    return err
  }
}