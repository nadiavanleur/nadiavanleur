import React, { useState, useEffect, useRef } from "react";
import Button from "../Button";
import Hr from "../Hr";
import * as style from "./style.module.scss";
import useElementActive from "../../hooks/useElementActive";

const MENU_ITEMS = [
  {
    label: <><u>P</u>rograms</>,
    icon: 'placeholder',
    onClick: () => { },
    disabled: true
  },
  {
    label: <><u>D</u>ocuments</>,
    icon: 'placeholder',
    onClick: () => { },
    disabled: true
  },
  {
    label: <><u>S</u>ettings</>,
    icon: 'placeholder',
    onClick: () => { },
    disabled: true
  },
  {
    label: <><u>F</u>ind</>,
    icon: 'placeholder',
    onClick: () => { },
    disabled: true
  },
  {
    label: <><u>H</u>elp</>,
    icon: 'placeholder',
    onClick: () => { },
    disabled: true
  },
  {
    label: <><u>R</u>un...</>,
    icon: 'placeholder',
    onClick: () => { },
    disabled: true
  },
  {
    element: <Hr />
  },
  {
    label: <><u>L</u>og off..</>,
    icon: 'placeholder',
    onClick: () => { },
    disabled: true
  },
  {
    label: <>Sh<u>u</u>t down..</>,
    icon: 'placeholder',
    onClick: () => { },
    disabled: true
  }
]

const StartMenu = () => {
  const { isActive, setIsActive, containerRef } = useElementActive(false, true);

  return (
    <nav className={style.container} ref={containerRef}>
      <Button label="Start" icon="windows" isBold isActive={isActive} onClick={() => setIsActive(prevActive => !prevActive)} />
      {isActive && (
        <div className={style.menu}>
          <ul>
            {MENU_ITEMS.map((item, n) => (
              <li key={n}>
                {item.element ? (
                  <>{item.element}</>
                ) : (
                  <Button label={item.label} icon={item.icon} onClick={item.onClick} styleModifier="buttonMenuLg" disabled={item.disabled} />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default StartMenu;