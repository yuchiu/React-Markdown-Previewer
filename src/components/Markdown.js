import React from "react"
import Preview from './Preview'
import Marked from "marked"

class Markdown extends React.Component {
  handleChange(e) {
    const markdown = e.target.value;
    this
      .props
      .changeMarkdown(markdown);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6 text-center mx-5 mt-3">
            <h1 className="text-center lead">
              Markdown:
            </h1>
            <textarea
              className="mt-3"
              rows='25'
              style={{
              width: 400
            }}
              value={this.props.markdown}
              onChange={this
              .handleChange
              .bind(this)}/>
          </div>
          <div className="col-md-4 ml-3 mt-3">
            <h1 className="text-center lead">
              Preview:
            </h1>
            <Preview markdown={this.props.markdown} className="mt-3 ml-3"/>
          </div>
        </div>

      </div>
    );
  }
}

export default Markdown;
