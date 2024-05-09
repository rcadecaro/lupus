import "./Typography.css";

export default function Typography({ children, color, variant }) {
  return <div className={`Typography ${color} ${variant}`}>{children}</div>;
}
