import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Project from "../projects/Project";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};

function Slideshow({ slideImages }) {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={slideImage.id}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            >
              <Project project={slideImage} />
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Slideshow;
