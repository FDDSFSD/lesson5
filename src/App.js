import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Page from "./Pages/Page";
import Summer from "./Pages/Page1/Summer";
import Second from "./Pages/Page2/Second";
import Recent from "./Pages/Page3/Recent";
import Best from "./Pages/Page4/Best";
import Latest from "./Pages/Page5/Latest";
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index path='/' element={<Page />} />
        <Route path = '/green' element = {<Summer/>}/>
        <Route path = '/gift' element = {<Second/>}/>
        <Route path = '/indoor' element = {<Recent/>}/>
        <Route path = '/blog' element = {<Best/>}/>
        <Route path = '/more' element = {<Latest/>}/>
      </Route>
    </Routes>
  );
}
export default App;