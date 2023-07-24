import { useSelector } from "react-redux";
import Mapa2 from "../components/Mapas/Mapa2";
import {
  MainHomeDiv,
  PopUpDiv,
} from "./HomeAdmin/HomeStyle";
import FormModify from "../components/FormModify/FormModify";
import { useEffect } from "react";
import TopBar2 from "../components/TopBarMui/TopBar2";

function Home() {
  const openModifyPanel = useSelector((state) => state.openModifyPanel);

  useEffect(() => {
    console.log(openModifyPanel);
  }, [openModifyPanel]);

  return (
    <MainHomeDiv
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
    >
      <TopBar2 />
      <PopUpDiv>{openModifyPanel !== 0 && <FormModify />}</PopUpDiv>

      <Mapa2 />
    </MainHomeDiv>
  );
}

export default Home;
