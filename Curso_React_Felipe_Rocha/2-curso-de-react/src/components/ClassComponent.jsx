import React from "react";


// Componentes de classe tem caído em desuso, porque hooks não podem ser utilizados 
// E também porque é mais verboso
class ClassComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "Hello world!"
        }
    }

    componentDidMount() {
        console.log("É executado ao montar o componente. :D")
    }

    render() {
        return <h1>{this.state.message}</h1>
    }
}

export default ClassComponent;