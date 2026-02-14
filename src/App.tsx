import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import otter from "./otter.jpg";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <br></br>
                Ryan Canatella
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Hello World!</p>
            <h2>Hello</h2>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: 200,
                                height: 20,
                            }}
                        ></div>
                        <Button
                            onClick={() => {
                                console.log("Hello World!");
                            }}
                        >
                            Log Hello World
                        </Button>
                        <p>Cool Animals:</p>
                        <ol>
                            <li>Sea Otter</li>
                            <li>Red Panda</li>
                            <li>Cat</li>
                        </ol>
                    </Col>
                    <Col>
                        <img src={otter} alt="A sea otter" height="300" />
                        <div
                            style={{
                                backgroundColor: "red",
                                width: 200,
                                height: 20,
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
