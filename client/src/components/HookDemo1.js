import useAxiosOnMount from "../hooks/useAxiosOnMount";
import AxiosContainer from "./AxiosContainer";
import StringifyJSON from "./StringifyJSON";



const HookDemo1 = (props)=> {

  const {data, loading, error} = useAxiosOnMount('https://reqres.in/api/users?delay=3')
  
  const renderData = () => {
    return data.map(d => <StringifyJSON json={d}/>)
 }

  return (
    <AxiosContainer loading={loading} error={error}>
      <h1>Hook Demo 1</h1>
      {data && renderData()}
    </AxiosContainer>
  )
}



export default HookDemo1;