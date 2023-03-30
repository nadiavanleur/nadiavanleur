import React, { useState, useEffect, useRef } from "react";
import Button from "../Button";
import * as style from "./style.module.scss";

const StartMenu = () => {
  const [active, setActive] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (active && containerRef.current && e.target instanceof HTMLElement && !containerRef.current.contains(e.target)) setActive(false)
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClick);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClick);
    };
  }, [containerRef]);

  return (
    <nav className={style.container} ref={containerRef}>
      <Button label="Start" onClick={() => setActive(!active)} icon="windows" isBold isActive={active} />
      <div className={style.menu} hidden={!active}>
        <ul>
          <li>
            <Button label="Programs" icon="placeholder" onClick={() => { }} styleModifier="menuLg" />
          </li>
          <li>
            <Button label="Documents" icon="placeholder" onClick={() => { }} styleModifier="menuLg" />
          </li>
          <li>
            <Button label="Settings" icon="placeholder" onClick={() => { }} styleModifier="menuLg" />
          </li>
          <li>
            <Button label="Search" icon="placeholder" onClick={() => { }} styleModifier="menuLg" />
          </li>
          <li>
            <Button label="Run" icon="placeholder" onClick={() => { }} styleModifier="menuLg" />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default StartMenu;