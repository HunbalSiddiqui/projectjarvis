import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import ScrollableSection, { ScrollableLink } from "react-update-url-on-scroll";
import "./NavItem.css";
function NavItem(props) {
  const [itemColor, setitemColor] = useState('lightgrey')
  useEffect(() => {
    if (props.currentUrl === `/${props.project.blog_title[0].text}`)
      setitemColor('blue')
    else
      setitemColor('lightgrey')
    return () => {
    }
  }, [props.currentUrl])
  return (
    <ScrollableLink href={`/${props.project.blog_title[0].text}`}>
      <div
        className="nav-item-container-wrapper flex-col pointer"
        style={{ color: `${itemColor}` }}
      >
        <h2 className="f1-5">{props.project.blog_title[0].text}</h2>
        <p className="f1-3">
          The garage opened in March 2018 . I managed to get paid in August.
          People repair their vehicles themselves and I accompany them. It is
          not...
        </p>
        <h2 className="item-date">
          {props.project.date}
        </h2>
      </div>
    </ScrollableLink>
  );
}

export default withRouter(NavItem);
