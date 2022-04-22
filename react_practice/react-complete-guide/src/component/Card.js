import "./Card.css";
// Pay attention to 2 undeclared props:
// props.className and props.children
function Card(props) {
  const className = "card " + props.className;
  return <div className={className}>{props.children}</div>;
}

export default Card;
