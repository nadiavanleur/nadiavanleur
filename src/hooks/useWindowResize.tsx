import { useEffect } from 'react';

type Props = () => void;

const useWindowResize = (onResize: Props) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    onResize();

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, []);
}

export default useWindowResize;