import React from 'react';

const TheoreticalBasis = (props) => {
    return (
        <div className="Theoretical-basis">
            <h1>Installation</h1>
            install nodejs<br />
            run "npm install -g create-react-app"<br />
            run "create-react-app my-first-app"<br />
            run "cd my-first-app"<br />
            run "npm start"<br />

            <h1>JSX</h1>
            there must be just one root element in render return<br />
            class -> className<br />
            onclick -> onClick<br />
            this is what it is compiled to in render: return React.createElement('div', {'{'}className: 'App'{'}'}, React.createElement('h1' ,, 'Hello'));<br />
        </div>
    );
}

export default TheoreticalBasis;