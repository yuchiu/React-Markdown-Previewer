import React from "react"
import Header from "./Header"
import Markdown from "./Markdown"

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      markdown: "Heading\n=======\n\nSub-heading\n-----------\n\n### Another deeper heading\n\nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n* apples\n* oranges\n* pears\n\nNumbered list:\n\n1. apples\n2. oranges\n3. pears\n\nThe rain---not the reign---in\nSpain.\n\n*this is a [FCC Project markdown previewer](https://www.freecodecamp.org/challenges/build-a-markdown-previewer)*"
    };
  }

  changeMarkdown(markdown) {
    this.setState({markdown});
  }

  render() {
    return (
      <div>
        <Header/>
        <Markdown
          changeMarkdown={this
          .changeMarkdown
          .bind(this)}
          markdown={this.state.markdown}/>
            
      </div>
    );
  }
}
export default Layout;