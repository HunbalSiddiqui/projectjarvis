import React, { useEffect, useState } from "react";
import "./Project.css";
import sstatic from "./Assets/sstatic.PNG";
import ScrollableSection, { ScrollableLink } from "react-update-url-on-scroll";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

function Project(props) {
  const [itemColor, setitemColor] = useState("black");




  useEffect(() => {
    // console.log(props.project)
    if (props.currentUrl === `/${props.project.blog_title[0].text}`) setitemColor("blue");
    else setitemColor("black");
    return () => {
      // cleanup
    };
  }, [props.currentUrl]);
  const listenScrollEvent = () => { };
  return (
    <ScrollableSection name={props.project.blog_title[0].text}>
      <div className="project-container-wrapper">
        <div className="project-container">
          <div className="project-container-headings f1-5">
            <div
              className="f1-5 flex-start project-heading fb"
              style={{ color: `${itemColor}` }}
            >
              {props.project.blog_title[0].text}
            </div>
            <div className="f1-5 flex-end project-date mute-txt">
              {props.project.date}
            </div>
          </div>
          <div className="project-container-content-div">
            <div className="project-container-content-left">
              <div className="project-container-content-left-img">
                <ImageCarousel projectId={props.projectName} />
              </div>
              <div className="project-container-content-left-content f1-3">
                {
                  props.project.para_field.map((para,index)=>{
                    return(
                      <p key={index} className={para.type}>{para.text}</p>
                    )
                  })
                }
              </div>
            </div>
          </div>
          {/* <div className="project-container-content-right">
            <h2 className="f1">Company: Conduit</h2>
            <h2 className="f1">Managing Director: David Morales</h2>
            <h2 className="f1">Creative: Pedro Damasceno</h2>
          </div>
         */}
        </div>
      </div>
    </ScrollableSection>
  );
}

export default Project;
