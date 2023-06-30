import React, { useEffect, useState } from "react";
import validate from "./FormValidation";
import { motion } from "framer-motion";
import { Background,} from "./FormStyle";
import { useDispatch, useSelector } from "react-redux";
import { putMarker, setOpenModifyPanel } from "../../redux/actions";

function FormModify() {
  const dispatch = useDispatch();
  const allMarkers = useSelector((state) => state.markers);
  const openModifyPanel = useSelector((state) => state.openModifyPanel);

  const [input, setInput] = useState({
    id: openModifyPanel.id,
    name: openModifyPanel.name,
    latitude: openModifyPanel.latitude,
    longitude: openModifyPanel.longitude,
    img: openModifyPanel.img,
    link: openModifyPanel.link,
    tipo: openModifyPanel.tipo,
  });

  const [errors, setErrors] = useState({
    name: "",
    latitude: "",
    longitude: "",
    img: "",
    link: "",
    tipo: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleCheck = (e) => {
    if (e.target.checked) {
      setInput({
        ...input,
        tipo: e.target.value,
      });
      setErrors(
        validate({
          ...input,
          tipo: e.target.value,
        })
      );
    }
  };




  const handleSubmit = (e) => {
     e.preventDefault();
     console.log(input);
     dispatch(putMarker(input));
/*      alert("Marker was created successfully!!");*/     
dispatch(setOpenModifyPanel(0));
  };

  function ver() {
    console.log(openModifyPanel);
  }

  function closeModifyForm() {
    dispatch(setOpenModifyPanel(0));
  }

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0, transition: { duration: 0.1 } }}
    >
      <Background>
      <button onClick={()=>ver()}>VER</button>

        <form className="form">
          <h4>Modificar Marcador</h4>
          <div>
            <label>Nuevo Nombre:</label>
            <input
              id="inputname"
              type="text"
              value={input.name}
              name="name"
              onChange={(e) => handleChange(e)}
              title="name"
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div>
            <label>Latitud:</label>
            <input
              id="totaLAT"
              type="number"
              step="0.01"
              value={input.latitude}
              name="latitude"
              onChange={(e) => handleChange(e)}
              title="latitude"
            />
            {errors.latitude && <p>{errors.latitude}</p>}
          </div>
          <div>
            <label>Longitud:</label>
            <input
              id="totalLONG"
              type="number"
              step="0.01"
              value={input.longitude}
              name="longitude"
              onChange={(e) => handleChange(e)}
              title="longitude"
            />
            {errors.duration && <p>{errors.duration}</p>}
          </div>
          <div className="SeasonCheckboxs">
            <label>Tipo:</label> <br></br>
            <label>
              <input
                type="checkbox"
                name="educacion"
                value="educacion"
                onChange={(e) => handleCheck(e)}
              />{" "}
              educacion
            </label>
            <label>
              <input
                type="checkbox"
                name="iglesia"
                value="iglesia"
                onChange={(e) => handleCheck(e)}
              />
              iglesia
            </label>
            <label>
              <input
                type="checkbox"
                name="castillo"
                value="castillo"
                onChange={(e) => handleCheck(e)}
              />
              castillo
            </label>
            <label>
              <input
                type="checkbox"
                name="pto turstico"
                value="pto turstico"
                onChange={(e) => handleCheck(e)}
              />
              pto turstico
            </label>
          </div>
          <div>
            <label>Link Imagen:</label>
            <input
              placeholder="This is optional"
              id="inputimg"
              type="text"
              value={input.img}
              name="img"
              onChange={(e) => handleChange(e)}
              title="img"
            />
          </div>
          <div className="divSubmitButton">
            {input.name !== "" &&
            input.latitude !== "" &&
            input.longitude !== "" &&
            input.tipo !== "" ? (
              <button
                id="submitButton"
                onClick={(e) => handleSubmit(e)}
                type="submit"
              >
                ACTUALIZAR
              </button>
            ) : (
              <button
                id="submitButton"
                disabled
                onClick={(e) => handleSubmit(e)}
                type="submit"
              >
                ACTUALIZAR
              </button>
            )}
          </div>
        </form>
        <button onClick={()=>closeModifyForm()}>CERRAR</button>
      </Background>
    </motion.div>
  );
}

export default FormModify;