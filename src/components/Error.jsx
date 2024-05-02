import "../App.css";
function Error({ error }) {
  return (
    <div className="error-cont">
      <p className="error-text">An Error Occured. {error}</p>
    </div>
  );
}
export default Error;
