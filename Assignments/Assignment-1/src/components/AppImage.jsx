


export function PublicImage(){
  return (
    <div className="row">
      <div className="col myCol">
          7.
        </div>
      <div className="col myCol">
          Public Image
      </div>
      <div className="col myCol">
          <img src="/myimg.jpg" alt="" style={{width:"120px", height:"80px"}}/>
      </div>
    </div>
  );
}
export function SrcImage(){
  return (
    <div className="row">
      <div className="col myCol">
          8.
        </div>
      <div className="col myCol">
          Source Image
      </div>
      <div className="col myCol">
          <img src="../src/assets/sameimage.jpg" alt="" style={{width:"120px", height:"80px"}} />
      </div>
    </div>
  );
}

