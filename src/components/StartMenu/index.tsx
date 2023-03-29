import React, {useState} from "react";
import Button from "../Button";
import * as style from "./style.module.scss";

const StartMenu = () => {
  const [active, setActive] = useState(false);

  return (
    <div className={style.startMenu}>
      <Button label="Start" onClick={() => setActive(!active)} icon="windows" />
    </div>
  )
}

export default StartMenu;