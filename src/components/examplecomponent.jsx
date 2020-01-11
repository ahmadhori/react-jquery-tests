import React, { Component } from "react";
import $ from "jquery";

class ExampleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const content = $("h1");
        Array.prototype.forEach.call(content, el => {
            console.log(el);
        });

        console.log(content);
    }

    render() {
        return <h1>ExampleComponent Component</h1>;
    }
}

export default ExampleComponent;
