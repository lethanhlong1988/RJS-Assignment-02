import "./Banner.css";

import Button from "./UI/Button";

export default function Banner() {
  return (
    <div className="my-content">
      <div>
        <h1>Name</h1>
      </div>
      <div className="action-bar">
        <Button>Play</Button>
        <Button>My List</Button>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a
          sint excepturi ab, laudantium dolore.
        </p>
      </div>
    </div>
  );
}
