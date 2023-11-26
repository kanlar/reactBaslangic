import Angular from "./images/angular.png";
import Bootstrap from "./images/bootstrap5.png";
import Ccsharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.png";
import "./Course.css";

const courseMap = {
  Angular,
  Bootstrap,
  Ccsharp,
  KompleWeb,
};

// eslint-disable-next-line react/prop-types
function Course({ courseName }) {
  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} alt="course" />
    </div>
  );
}

export default Course;
