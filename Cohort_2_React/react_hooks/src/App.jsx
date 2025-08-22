

function App(){

  return <div>
    <CardWrapper>
      Hi There
    </CardWrapper>
  </div>
}

function CardWrapper({children}){
  return <div style = {{
    border: "2px solid red"
  }}>
    {children}
  </div>
}


export default App