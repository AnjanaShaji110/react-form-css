import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import AddContact from './components/AddContact';
import ViewContact from './components/ViewContact';


function App() {
  return (
    <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<ViewContact />} />
    <Route path="/addContact" element={<AddContact />} />
    <Route path="/editContact/:id" element={<AddContact />} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
