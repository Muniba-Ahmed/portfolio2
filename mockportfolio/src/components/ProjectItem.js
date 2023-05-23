// import React from "react";

// function ProjectItem({ image, name }) {
//   return (
//     <div className="projectItem">
//       <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
//       <h1>{name}</h1>
//     </div>
//   );
// }

// export default ProjectItem;

import React from "react";

function ProjectItem({ image, name, onClick }) {
  return (
    <div className="projectItem">
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
      <button onClick={onClick}>View Details</button>
    </div>
  );
}

export default ProjectItem;
