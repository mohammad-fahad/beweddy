import React from "react";
import { Img } from "react-image";

class Canvas extends React.Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    const img = this.refs.image;

    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      ctx.font = "40px Courier";
      ctx.fillText(this.props.text, 210, 75); // THIS IS THE PLACE TEXT IS EMBEDDED INTO THE PICTURE
    };
  }
  render() {
    return (
      <div>
        <canvas ref="canvas" width={640} height={425} />
        <img
          ref="image"
          alt="Stackoverflow56203352"
          src={this.props.image}
          className="hidden"
        />
        {/* <Img
          src={this.props.image}
          container={(children) => {
            return <div>{children}</div>;
          }}
        /> */}
      </div>
    );
  }
}
export default Canvas;
