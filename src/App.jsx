import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
    ${reset}
`

function App() {
    return (
        <React.Fragment>
            <GlobalStyle/>
            <div className="App">
                <h1>App</h1>
            </div>
        </React.Fragment>
    );
}

export default App;