"use server"
import Ninja from "@/components/Ninja";
import { getSession, getNinjas } from "@/lib";

const Home = async (props) => {
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