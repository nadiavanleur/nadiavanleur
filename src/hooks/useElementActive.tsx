import { useEffect, useState, useRef } from 'react';

type ClickOutsideReturnType = {
  isActive: boolean,
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>,
  containerRef: React.RefObject<HTMLDivElement>
};

const useElementActive = (defaultIsActive = false, ignoreClickInside = false): ClickOutsideReturnType => {
  const [isActive, setIsActive] = useState(defaultIsActive);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const containerClickedInside = containerRef.current.contains(e.target as Node);
      if (containerClickedInside && !ignoreClickInside) setIsActive(true);
      if (!containerClickedInside) setIsActive(false);
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);

  return { isActive, setIsActive, containerRef };
}

export default useElementActive;