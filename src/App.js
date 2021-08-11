import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
let marked = require("marked");

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      text: "",
    };
  }

  updateText(text) {
    this.setState({ text });
  }

  exportFileAsTxt() {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById('inputBox').value], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "markdown.txt";
    document.body.appendChild(element);
    element.click();
  }

  exportFileAsMD() {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById('inputBox').value], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "markdown.md";
    document.body.appendChild(element);
    element.click();
  }

  render() {
    {/* styles */}
    var inputBoxStyle = {
      width: "45vw",
      height: "80vh",
      marginLeft: "12px"
    };

    var outputBoxStyle = {
      width: "45vw",
      height: "80vh",
      backgroundColor: "#F1ECDF",
      border: "black solid 0.4px",
      marginLeft: "12px"
    };

    var marginTop = {
      marginTop: "20px"
    }

    var tableStyle = {
      width: "60vw",
      marginTop: "12px",
      marginLeft: "12px"
    };

    return (
      <div className="App">

        <Container fluid>
          
          {/* Title Row */}
          <Row>
            <Col>
              <h1 className="text-center">
                Markdown Preview Application
              </h1>
            </Col>
          </Row>

          {/* Sub-Title Row */}
          <Row>
            {/* Text Input Col */}
            <Col>
              <h3 className="text-center">
                Text Input
              </h3>
            </Col>

            {/* Preview Col */}
            <Col>
              <h3 className="text-center">
                Markdown Preview
              </h3>
            </Col>
          </Row>

          {/* Text Box Row */}
          <Row>
            {/* Text Input Col */}
            <Col>
              <div className="mark-input text-center" style={inputBoxStyle} value={this.state.text}
                onChange={(e) => {
                  this.updateText(e.target.value);
                }}>
                  {console.log(this.state.text)}
                <textarea className="input" id="inputBox" style={inputBoxStyle}>

                </textarea>
              </div>
            </Col>

            {/* Preview Col */}
            <Col>
            <div style={outputBoxStyle}
              dangerouslySetInnerHTML={{
                __html: marked(this.state.text),
              }}>
            </div>
            </Col>
          </Row>

          {/* Text Box Row */}
          <Row>
            {/* Text Input Col */}
            <Col>
              <div className="text-center">
                <button onClick={this.exportFileAsTxt}>Export as .txt</button>
              </div>
            </Col>

            {/* Preview Col */}
            <Col>
              <div className="text-center">
                <button onClick={this.exportFileAsMD}>Export as .md</button>
              </div>
            </Col>
          </Row>

          {/* markdown cheatsheet */}
          <Row style={marginTop}>
            <h1 className="text-center">Markdown Cheatsheet</h1>
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <Table striped bordered style={tableStyle}>
                <thead>
                  <tr>
                    <th>Element</th>
                    <th>Markdown Syntax</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Heading</th>
                    <th># H1 <br></br>## H2<br></br>### H3</th>
                  </tr>
                  <tr>
                    <th>Bold</th>
                    <th>**bold text**</th>
                  </tr>
                  <tr>
                    <th>Italicized</th>
                    <th>*italicized text*</th>
                  </tr>
                  <tr>
                    <th>Strikethrough</th>
                    <th>~strikethrough text~</th>
                  </tr>
                  <tr>
                    <th>Blockquote</th>
                    <th>> blockquote</th>
                  </tr>
                  <tr>
                    <th>Ordered List</th>
                    <th>1. First Item <br></br>2. Second Item <br></br>3. Third Item</th>
                  </tr>
                  <tr>
                    <th>Unordered List</th>
                    <th>- First Item <br></br>- Second Item <br></br>- Third Item</th>
                  </tr>
                  <tr>
                    <th>Code</th>
                    <th>`CODE HERE`</th>
                  </tr>
                  <tr>
                    <th>Horizontal Rule</th>
                    <th>---</th>
                  </tr>
                  <tr>
                    <th>Link</th>
                    <th>[title](https://www.example.com)</th>
                  </tr>
                  <tr>
                    <th>Image</th>
                    <th>![alt text](image.jpg)</th>
                  </tr>
                  <tr>
                    <th>Footnote</th>
                    <th>Here's a sentence with a footnote. [^1]<br></br>[^1]: This is the footnote.</th>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col></Col>
          </Row>

        </Container>

      </div>
    );
  }
}