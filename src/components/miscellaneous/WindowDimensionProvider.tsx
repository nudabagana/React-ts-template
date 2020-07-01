import * as React from 'react';

interface ISize {
  width: number;
  height: number;
}

const getCurrentWindowSize = () => {
  return { width: window.innerWidth, height: window.innerHeight };
};

const WindowSizeCtx = React.createContext<ISize>(getCurrentWindowSize());

const WindowWidthProvider: React.FC = ({ children }) => {
  const [size, setSize] = React.useState<ISize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setSize(getCurrentWindowSize());
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <WindowSizeCtx.Provider value={size}>{children}</WindowSizeCtx.Provider>;
};
export default WindowWidthProvider;

export const useWindowSize = () => React.useContext(WindowSizeCtx);

export const withWindowSizeProvider = (Component: any) => {
  return (props: any) => {
    const screenSize = useWindowSize();
    return <Component screenSize={screenSize} {...props} />;
  };
};
