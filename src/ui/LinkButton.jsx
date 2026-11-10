import { Link } from "react-router-dom";

function LinkButton({ children, to = { to } }) {
  return (
    <Link className="text-sm text-blue-400 hover:text-blue-900 hover:underline">
      {children}
    </Link>
  );
}

export default LinkButton;
