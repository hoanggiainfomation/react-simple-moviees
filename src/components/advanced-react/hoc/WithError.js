function WithError(Component) {
  return (props) => {
    <Component {...props}></Component>;
  };
}
export default WithError;
