function AppEvaluate() {
  let result = 10*2-10/5;
  
  return (
    <div className="row">
      <div className="col myCol">
          9.
        </div>
      <div className="col myCol">
          Evaluate The Expression <br/> [10*5 &minus; 10 &#8725; 5]
      </div>
      <div className="col myCol">
          {result}
      </div>
    </div>
  )
}

export default AppEvaluate;