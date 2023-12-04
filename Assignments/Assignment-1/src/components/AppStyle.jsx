export function AppStyle1(){
  return (
    <div className="row">
      <div className="col myCol">
          11.
        </div>
      <div className="col myCol">
          Styled With Style Attribute
      </div>
      <div className="col myCol">
          <p style={{backgroundColor: "beige", textDecoration: "underline", textAlign:"center"}}>Sample Text</p>
      </div>
    </div>
  );
  }

  export function AppStyle2(){

  let myStyle = {
    backgroundColor: "azure",
    textDecoration: "line-through",
    textAlign: "center"
  };
    return (
      <div className="row">
        <div className="col myCol">
            12.
          </div>
        <div className="col myCol">
            Styled With Internal Styling
        </div>
        <div className="col myCol">
            <p style={myStyle}>Sample Text</p>
        </div>
      </div>
    );
  }
  export function AppStyle3(){
    return (
      <div className="row">
        <div className="col myCol">
            13.
          </div>
        <div className="col myCol">
            Styled With External Styling
        </div>
        <div className="col myCol">
            <p className="externalP">Sample Text</p>
        </div>
      </div>
    );
  }


