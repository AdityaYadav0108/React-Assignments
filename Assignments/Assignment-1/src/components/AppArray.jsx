function AppArray(){
  let arr = ["Angular", "React", "Vue.js"];

  return (
    <div className="row">
      <div className="col myCol">
          5.
        </div>
      <div className="col myCol">
          Array
      </div>
      <div className="col myCol">
          {String(arr)}
      </div>
    </div>
  )
}

export default AppArray;