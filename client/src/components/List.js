import StringifyJSON from "./StringifyJSON";

const List = (props) => {
  const { name, data, renderData } = props

  return(
    <>
      <h1>{name}</h1>
      <div>
        {data.map( d => renderData ? renderData(d) : <StringifyJSON json={d}/>)}
      </div>
    </>
  )
}




export default List;