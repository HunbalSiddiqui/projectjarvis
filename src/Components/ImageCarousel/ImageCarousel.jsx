import React from "react";
import sstatic from "./Assets/sstatic.PNG";
import ScrollableSection, { ScrollableLink } from "react-update-url-on-scroll";

function ImageCarousel(props) {
  return (
    // <ScrollableSection name={props.projectId}>
      <div
        id={props.projectId}
        class="carousel slide"
        data-ride="carousel"
        data-interval={false}
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block"
              style={{ width: `${props.Size.width}`, height: `${props.Size.height}`, objectFit: "fill" }}
              src={props.projectimages.url}
              alt="First slide"
            />
          </div>
            <div class="carousel-item">
            <img
              class="d-block"
              style={{ width: `${props.Size.width}`, height: `${props.Size.height}`, objectFit: "fill" }}
              src={props.projectimages.second.url}
              alt="Second slide"
            />
          </div>

          <div class="carousel-item">
            <img
              class="d-block"
              style={{ width: `${props.Size.width}`, height: `${props.Size.height}`, objectFit: "fill" }}
              src={props.projectimages.third.url}
              alt="Third slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          style={{ opacity: "0", cursor: "e-resize" }}
          href={`#${props.projectId}`}
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          style={{ opacity: "0", cursor: "e-resize" }}
          href={`#${props.projectId}`}
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    // </ScrollableSection>
  );
}

export default ImageCarousel;
