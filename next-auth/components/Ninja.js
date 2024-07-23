"use client"

const Ninja = ( { data } ) => {
  const {belt, bucks, id, imgNum, llu, name} = data
  return (
    <div className="outerNinja">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
 
export default Ninja;