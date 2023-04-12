import React, { useState, useEffect, useRef } from "react";
import Button from "../Button";
import Hr from "../Hr";
import * as style from "./style.module.scss";

const MENU_ITEMS = [
  {
    label: <><u>P</u>rograms</>,
    icon: 'placeholder',
    onClick: () => { }
  },
  {
    label: <><u>D</u>ocuments</>,
    icon: 'placeholder',
    onClick: () => { }
  },
  {
    label: <><u>S</u>ettings</>,
    icon: 'placeholder',
    onClick: () => { }
  },
  {
    label: <><u>F</u>ind</>,
    icon: 'placeholder',
    onClick: () => { }
  },
  {
    label: <><u>H</u>elp</>,
    icon: 'placeholder',
    onClick: () => { }
  },
  {
    label: <><u>R</u>un...</>,
    icon: 'placeholder',
    onClick: () => { }
  },
  {
    element: <Hr />
  },
  {
    label: <><u>L</u>og off..</>,
    icon: 'placeholder',
    onClick: () => { }
  },
  {
    label: <>Sh<u>u</u>t down..</>,
    icon: 'placeholder',
    onClick: () => { }
  }
]

const StartMenu = () => {
  const [active, setActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActive(false);
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);

  return (
    <nav className={style.container} ref={containerRef}>
      <Button label="Start" icon="windows" isBold isActive={active} onClick={() => setActive(prevActive => !prevActive)} />
      {active && (
        <div className={style.menu}>
          <ul>
            {MENU_ITEMS.map((item, n) => (
              <li key={n}>
                {item.element ? (
                  <>{item.element}</>
                ) : (
                  <Button label={item.label} icon={item.icon} onClick={item.onClick} styleModifier="menuLg" />
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