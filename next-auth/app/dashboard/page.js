"use server"
import Ninja from "@/components/Ninja";
import { getSession, getNinjas } from "@/lib";
import { redirect } from "next/navigation";

const Home = async (props) => {
  const session = await getSession()
  if (!session || !session.user || !session.user.username) redirect("/")

  const ninjas = await getNinjas()
  console.log("ninjas: ", ninjas)

  return (
    <div>
      {ninjas?.map(item => {
        return <Ninja key={item.id} data={item}/>
      })}
    </div>
  )

}
 
export default Home;