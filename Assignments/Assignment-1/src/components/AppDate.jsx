function AppDate() {
  let date = new Date();

  return (
    <div className="row">
      <div className="col myCol">
          6.
        </div>
      <div className="col myCol">
          Date & Time
      </div>
      <div className="col myCol">
          {date.toLocaleDateString()}, &nbsp; {date.toLocaleTimeString()}
      </div>
      
    </div>
  )
}

export default AppDate;