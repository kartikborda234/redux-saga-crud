import MyForm from "./Component/Create";
import React from "react";
import Table from "../src/Component/Table"
import store from "./redux/store";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Tea from "./Component/Tea";
import TeasGraph from "./Component/TeasGraph";
import TeasTable from "./Component/TeasTable";
import Card from "./Component/Card";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/create" element={<MyForm />} />
          <Route path="/create/:id" element={<MyForm />} />
          <Route path="/tea" element={<Tea />} />
          <Route path="/graph" element={<TeasGraph />} />
          <Route path="/teasTable" element={<TeasTable />} />
          <Route path="/tea/:id" element={<Tea />} />
          <Route path="/card" element={<Card />} />
          {/*<Route path="contact" element={<Contact />} />*/}
          {/*<Route path="*" element={<NoPage />} />*/}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
