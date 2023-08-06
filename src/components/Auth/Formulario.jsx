import { useEffect, useState } from "react";
import { useAuth } from "./authContext";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, setAdmin } from "../../redux/actions";

export function Formulario() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const allUsers = useSelector((state) => state.users);
  const admin = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const [input, setInput] = useState({
    name: "Santiago Agüero",
    password: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(allUsers[0].email, input.password);

    if(allUsers[0].family_name === input.name && allUsers[0].email === input.password){
      dispatch(setAdmin(!admin))
      navigate("/admin")
    } else {
      navigate("/")
    }

  };

  const ver = () => {
    console.log(user?.displayName, "1");
    console.log(allUsers[0]?.family_name,"2");
    <button onClick={() => ver()}>VER</button>
  };
  return (
    <div>

       <form className="form">
{/*         <div>
          <label>Nombre:</label>
          <input
            id="inputname"
            type="text"
            value={input.name}
            name="name"
            onChange={(e) => handleChange(e)}
            title="name"
          />
        </div> */}
        <div>
          <label>Contraseña:</label>
          <input
            id="password"
            type="password"
            value={input.password}
            name="password"
            onChange={(e) => handleChange(e)}
            title="password"
          />
        </div>
        <div className="divSubmitButton">
          {input.name !== "" && input.password !== "" ? (
            <button
              id="submitButton"
              onClick={(e) => handleSubmit(e)}
              type="submit"
            >
              Login
            </button>
          ) : (
            <button
              id="submitButton"
              disabled
              onClick={(e) => handleSubmit(e)}
              type="submit"
            >
              Login
            </button>
          )}
        </div>
      </form>

{/*         <div>
          {!user && <button onClick={handleGoogleSignIn}>Login with Google</button>}
          {user && <button onClick={()=>navigate("/admin")}>Log In</button>   }
        </div> */}
    </div>
  );
}
