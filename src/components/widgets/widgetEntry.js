import React from "react";
import "./widgetEntry.css";

export default function WidgetEntry({ title, subtitle, image }) {
  return (
    <div className="entry_body flex">
      <img src={image} alt={title} className="entry_image" />
      <div className="entry_right_body flex">
        <p className="entry_title">{title}</p>
        <p className="entry_subtitle">{subtitle}</p>
      </div>
    </div>
  );
}
