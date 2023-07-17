// eslint-disable-next-line react/prop-types
const Authlayout = ({ children }) => {
  return (
    <div className="auth-multi-layout">
      <div className="auth-box">{children}</div>
    </div>
  );
};

export default Authlayout;
