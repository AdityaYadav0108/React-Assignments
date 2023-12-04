import AppName from './components/AppName';
import AppHeaders from './components/AppHeaders';
import AppInteger from './components/AppInteger';
import AppString from './components/AppString';
import AppBoolean from './components/AppBoolean';
import AppObject from './components/AppObject';
import AppArray from './components/AppArray';
import AppDate from './components/AppDate';
import AppEvaluate from './components/AppEvaluate';
import AppMultiple from './components/AppMultiple';
import {AppStyle1, AppStyle2, AppStyle3} from './components/AppStyle';
import { PublicImage, SrcImage } from './components/AppImage';
import './App.css'

function App() {


  return (
  <center className='container'>
    <AppName/>
    <div className=".mytable">
      <AppHeaders/>
      <AppInteger/>
      <AppString/>
      <AppBoolean/>
      <AppObject/>
      <AppArray/>
      <AppDate/>
      <PublicImage/>
      <SrcImage/>
      <AppEvaluate/>
      <AppMultiple/>
      <AppStyle1/>
      <AppStyle2/>
      <AppStyle3/>
    </div>
  </center>
  );
}

export default App;
