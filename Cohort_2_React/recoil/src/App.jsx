import { RecoilRoot, useRecoilValue } from "recoil"
import { todoAtom } from "./atomfamily"


function App(){

  return <RecoilRoot>
    <TodoRenderer id = {1}/>
    <TodoRenderer id = {2}/>
  </RecoilRoot>
}

function TodoRenderer({id}){
  const currenttodo = useRecoilValue(todoAtom(id))
  return <div>
    {currenttodo.title}<br/>
    {currenttodo.description}
  </div>
}

export default App