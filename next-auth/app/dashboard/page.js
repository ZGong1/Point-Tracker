"use server"
import Ninja from "@/components/Ninja";
import { getSession, getNinjas } from "@/lib";

const Home = async (props) => {
  const ninjas = await getNinjas()
  console.log("ninjas: ", ninjas)

  return (
    <div>
      {ninjas?.map(item => {
        return <Ninja data={item}/>
      })}
    </div>
  )

  return (
    <div>
      {ninjas?.map(item => {
        return <pre>{JSON.stringify(item, null, 2)}</pre>
      })}
    </div>
  );
}
 
export default Home;