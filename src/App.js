import { BrowserRouter, Route, Routes } from "react-router-dom";


import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Container from "./components/layout/Container";

import Login from "./components/pages/Auth/Login";
import Register from "./components/pages/Auth/Register";
import Home from "./components/pages/Home";
import Message from "./components/layout/Message";

import MyPets from "./components/pages/Pets/MyPets";

import { UserProvider } from "./context/UserContext";
import AddPet from "./components/pages/Pets/AddPet";

function App() {
  return (
      <BrowserRouter>
      <UserProvider>
        <Navbar />
        <Message />
        <Container>
          <Routes>
            <Route path="/pets/mypets" element={<MyPets />} />
            <Route path="/pets/add" element={<AddPet />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
