function AppObject() {
  let object1 = {name:"Sachin", job:"Developer", country:"Dubai"};
  
  return (
    <div className="row">
      <div className="col myCol">
          4.
        </div>
      <div className="col myCol">
          Object
      </div>
      <div className="col myCol">
          <p className="">{JSON.stringify(object1, null, 2)}</p>
      </div>
    </div>
  )
}


export default AppObject;