import React from "react"
import Marked from "marked"

class Preview extends React.Component {

  render() {
    return (
      <div >
        <article dangerouslySetInnerHTML={{__html:marked(this.props.markdown)}}  >
        </article>
      </div>
    );
  }
}
export default Preview;
