import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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
                <textarea className="input" style={inputBoxStyle}>

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

        </Container>

      </div>
    );
  }
}