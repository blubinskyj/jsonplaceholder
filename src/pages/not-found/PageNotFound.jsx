import {Link} from "react-router-dom";

export const PageNotFound = () => {
  return (
      <div>
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/jsonplaceholder">Go to the home page</Link>
        </p>
      </div>
  )
}
