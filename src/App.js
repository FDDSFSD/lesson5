import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Page from "./Pages/Page";
import Summer from "./Pages/Page1/Summer";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index path='/' element={<Page />} />
        <Route path='/blog' element={<Summer/>}/>
      </Route>
    </Routes>
  );
}
export default App;