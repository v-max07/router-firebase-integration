import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login"
import Orders from "./components/Orders/Orders";
import Products from "./components/Products/Products";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Reviews from "./components/Reviews/Reviews";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/orders'
          element={
            <RequireAuth>
              <Orders></Orders>
            </RequireAuth>
          }>
          
        </Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
      </Routes>
    </div>
  );
}

export default App;
