import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiRequest } from "../libs/request";

const { useState, useEffect } = require("react");

function NavBar() {
    const state = useSelector((state) => state);
    const [cats, setcats] = useState([]);
    const navigate = useNavigate()
    const dispatch=useDispatch()
    const isLoggedIn = state.loggedin.IsLoggedIn;
    const role = state.loggedin.Role;
    const logout=()=>{
        dispatch({type:'LogOut'})        
        sessionStorage.clear();
        toast.success('logout successfully')
        setTimeout(() => {
          navigate('/')
       }, 1)
    }

    useEffect(() => {
        apiRequest
        .get("categories")
        .then((resp) => setcats(resp.data))
        .catch((error) => alert(error));
    }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark position-sticky mb-0"
        style={{ top: 0, zIndex: "1000",backgroundColor:"black" }}
      >
        <Link className="navbar-brand" to="#">
          <img src='https://res.cloudinary.com/dd7ksmffx/image/upload/v1695488453/logo_before_1-removebg-preview_hwnggs.png' alt='no image' class="w-50 h-50"/>
        </Link>
        <button
          className="navbar-toggler ml-auto"
          type="button" 
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-dark"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active"
            style={{ marginRight: "90px", backgroundColor: "black",borderRadius: "10px" }}>
              <Link className="nav-link" to="/">
                <i>Home</i>
              </Link>
            </li>
            <li className="nav-item dropdown"
             style={{ marginRight: "90px", backgroundColor: "black",borderRadius: "10px" }}>
              <Link
                className="nav-link dropdown-toggle text-white"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i>Categories</i>
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {cats
                  .filter((x) => x.isactive)
                  .map((x) => (
                    <Link key={x.id} className="dropdown-item" to={"/cats/" + x.id}>
                      {x.catname}
                    </Link>
                  ))}
              </div>
            </li>
            <ul className="navbar-nav ml-auto">
              {isLoggedIn ? (
                <>
                <li className="nav-item active"
                 style={{ marginRight: "90px", backgroundColor: "black",borderRadius: "10px" }}>
                    <Link className="nav-link" to="/profile">
                        <i>Profile</i>
                    </Link>
                </li>
                  {role === "Customer" ? (
                    <>
                      <li className="nav-item active"
                       style={{ marginRight: "90px", backgroundColor: "black",borderRadius: "10px" }}>
                        <Link className="nav-link" to="/cart">
                         <i> View Cart{" "} </i>
                          {state.cart.length === 0 ? (
                            ""
                          ) : (
                            <span className="badge badge-primary p-2">
                              {state.cart
                                .map((x) => x.qty)
                                .reduce((a, b) => parseInt(a) + parseInt(b))}
                            </span>
                          )}
                        </Link>
                      </li>
                      
                      <li className="nav-item active"
                      style={{ marginRight: "90px", backgroundColor: "black",borderRadius: "10px" }}>
                        <Link className="nav-link" to="/myorders">
                         <i> My Orders </i>
                        </Link>
                      </li>
                      
                    </>
                  ) : null}
                  {role === "admin" ? (
                    <>
                      <li className="nav-item active"
                       style={{ marginRight: "90px", backgroundColor: "black",borderRadius: "10px" }}>
                        <Link className="nav-link" to="/dashboard">
                        <i>DashBoard</i>
                        </Link>
                      </li>
                      {/* <li className="nav-item active"
                       style={{ marginRight: "90px", backgroundColor: "black",borderRadius: "10px" }}>
                        <Link className="nav-link" to="/products">
                         <i> Products </i>
                        </Link>
                      </li>
                      <li className="nav-item active"
                      style={{ marginRight: "90px", backgroundColor: "black",borderRadius: "10px" }}>
                        <Link className="nav-link" to="/customers">
                         <i> Customers </i>
                        </Link>
                      </li>
                      <li className="nav-item active"
                       style={{ marginRight: "90px", backgroundColor: "black",borderRadius: "10px" }}>
                        <Link className="nav-link" to="/orders">
                        <i>  Orders </i>
                        </Link>
                      </li> */}
                    </>
                  ) : null}
                  <li className="nav-item active"
                  style={{ position: "absolute", top: 10, right: 22,backgroundColor: "black",borderRadius: "10px" }}>
                    <Link className="nav-link" onClick={logout} to="#">
                      <i>  Logout </i>
                    </Link>
                </li>
                </>
              ) : (
                <>
                  <li className="nav-item active"
                  style={{ position: "absolute", top: 35, right: 22 ,backgroundColor: "black",borderRadius: "10px" }}>
                    <Link className="nav-link" to="/login">
                    <i>  Login </i>
                    </Link>
                  </li>
                  <li className="nav-item active"
                  style={{ position: "absolute", top: 35, right: 85 ,backgroundColor: "black",borderRadius: "10px" }}>
                    <Link className="nav-link" to="/register">
                      <i>Register</i>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
