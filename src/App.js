import React from 'react';
import './App.css';
import Library from './Components/Library';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Container, Table, Row, Col, Button } from 'react-bootstrap';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      libs: [
        {
          name: "Anime",
          type: "js",
          website: "https://animejs.com/",
          tags: ["anime", "animate", "animation", "lightweight"],
          description: "Lightweight JavaScript animation library, it works with CSS properties, SVG, DOM attributes and JavaScript Objects."
        },
        {
          name: "React",
          type: "js",
          website: "https://reactjs.org/",
          tags: ["desktop", "mobile", "interface"],
          description: "A JavaScript library for building user interfaces."
        },
        {
          name: "Vue",
          type: "js",
          website: "https://vuejs.org/",
          tags: ["interface"],
          description: "The Progressive JavaScript Framework"
        },
        {
          name: "Express",
          type: "node",
          website: "https://expressjs.com/",
          tags: ["node", "web", "mobile"],
          description: "Fast, unopinionated, minimalist web framework for Node.js"
        },
        {
          name: "Electron",
          type: "js",
          website: "https://www.electronjs.org/",
          tags: ["desktop", "apps", "windows", "mac", "osx", "linux"],
          description: "Build cross-platform desktop apps with JavaScript, HTML, and CSS"
        },
        {
          name: "Phaser",
          type: "js",
          website: "https://phaser.io/",
          tags: ["game", "gaming", "animation", "html5", "desktop", "mobile", "canvas", "webgl"],
          description: "A fast, free and fun open source framework for Canvas and WebGL powered browser games."
        },
        {
          name: "Angular",
          type: "js",
          website: "https://angular.io/",
          tags: ["desktop", "mobile", "user", "interface", "framework"],
          description: "A framework for user interfaces, desktop and mobile."
        },
        {
          name: "GreenSock",
          type: "js",
          website: "https://greensock.com/",
          tags: ["animate", "animation", "professional-grade"],
          description: "Ultra high-performance, professional-grade animation for the modern web"
        },
        {
          name: "PaperJS",
          type: "js",
          website: "http://paperjs.org/",
          tags: ["vector", "graphics", "html5", "canvas", "bezier"],
          description: "Paper.js is an open source vector graphics scripting framework that runs on top of the HTML5 Canvas. It offers a clean Scene Graph / Document Object Model and a lot of powerful functionality to create and work with vector graphics and bezier curves, all neatly wrapped up in a well designed, consistent and clean programming interface. "
        },
        {
          name: "P5",
          type: "js",
          website: "https://p5js.org/",
          tags: ["canvas", "html5", "video", "sound", "sketch", "drawing"],
          description: "p5.js is a JavaScript library for creative coding, with a focus on making coding accessible and inclusive for artists, designers, educators, beginners, and anyone else! p5.js is free and open-source because we believe software, and the tools to learn it, should be accessible to everyone. Using the metaphor of a sketch, p5.js has a full set of drawing functionality. However, you’re not limited to your drawing canvas. You can think of your whole browser page as your sketch, including HTML5 objects for text, input, video, webcam, and sound."
        },
        {
          name: "EmberJS",
          type: "js",
          website: "https://emberjs.com/",
          tags: ["framework", "apps", "user", "interface"],
          description: "Ember.js is a productive, battle-tested JavaScript framework for building modern web applications. It includes everything you need to build rich UIs that work on any device."
        },
        {
          name: "D3",
          type: "js",
          website: "https://d3js.org/",
          tags: ["data", "visualization", "SVG", "CSS", "bar", "chart"],
          description: "D3.js is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS. D3’s emphasis on web standards gives you the full capabilities of modern browsers without tying yourself to a proprietary framework, combining powerful visualization components and a data-driven approach to DOM manipulation."
        },
        {
          name: "Svelte",
          type: "js",
          website: "https://svelte.dev/",
          tags: ["user", "interfaces", "framework", "app", "virtual", "DOM"],
          description: "Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app. Instead of using techniques like virtual DOM diffing, Svelte writes code that surgically updates the DOM when the state of your app changes."
        },
        {
          name: "React Native",
          type: "js",
          website: "https://reactnative.dev/",
          tags: ["mobile", "interfaces", "framework", "app", "windows", "macOS", "linux", "android", "ios"],
          description: "Create native apps for Android and iOS using React. React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces."
        },
        {
          name: "Ionic",
          type: "js",
          website: "https://ionicframework.com/",
          tags: ["mobile", "interfaces", "framework", "app", "windows", "macOS", "linux", "android", "ios"],
          description: "One codebase. Any platform. Now in React, Angular, Vue. An open source mobile UI toolkit for building high quality, cross-platform native and web app experiences. Move faster with a single code base, running everywhere with JavaScript and the Web."
        },
      ]
    }
  }

  

  render() {
    return (
      <div className="App">
        <Jumbotron className="headerText" fluid>
          <Container>
            <div className="text-center text-sm-left">
              <h1><i className="fab fa-js-square"></i> Libraries and Frameworks</h1>
              <p className="lead">This is a community resource that will allow you find your library or framework that they may or may not be looking for</p>
              <hr className="my-4" />
              <p>This resource does not and probably will never have <em>every</em> Library or Framework, but the idea is that it has the majority</p>
            </div>
          </Container>
        </Jumbotron>
        <Container>
          <div className="text-center pb-3">
              <h6 className="text-center"><span className="badge badge-info">Info</span> If you're looking for something specific, press <kbd><kbd>ctrl</kbd> + <kbd>F</kbd></kbd> or <kbd><kbd>cmd</kbd> + <kbd>F</kbd></kbd> in your browser to search the table.</h6>
              <Button href="https://github.com/Catley94/js-libs-frameworks#improve-our-website" variant="success" block>Add a library or framework</Button>
            </div>
        </Container>
        <Container>
          <Table hover responsive="sm">
            <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Website</th>
                    <th>Description</th>
                    <th>Tags</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.libs.map((lib, idx) => {
                    return <Library lib={lib} idx={idx} key={idx}/>;
                  })}
                </tbody>
          </Table>
        </Container>
        <footer >
          <Container fluid>
            <div className="text-center p-2">
              <Row>
                <Col>
                  <Button href="https://github.com/Catley94/js-libs-frameworks/issues" variant="outline-warning">Log an issue</Button>
                </Col>
                <Col>
                  <Button className="" href="https://github.com/Catley94/js-libs-frameworks#improve-our-website" variant="outline-success">Improve our website</Button>
                </Col>
              </Row>
            </div>
          </Container>
        </footer>
      </div>
    );
  }
  
}

export default App;
