let AppMultiple = () => (
  <div className="row">
      <div className="col myCol">
          10.
        </div>
      <div className="col myCol">
          Add Multiple elements in one JSX [h1, p, ul]
      </div>
      <div className="col myCol">
          <div className="row">
            <h1 className="multipleHeading">This Is A Heading</h1>
          </div>
          <div className="row">
            <p className="mPara">This is a p element</p>
          </div>
          <div className="row">
              <ul>
                <li>React</li>
                <li>Angular</li>
                <li>Vue.js</li>
              </ul>
          </div>
      </div>
      
  </div>
)

export default AppMultiple;