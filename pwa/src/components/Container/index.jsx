const Container = ({ children, className = "" }) => {
  return (
    <div className={`Container flex flex-col p-4 ${className}`}>{children}</div>
  );
};

export default Container;
