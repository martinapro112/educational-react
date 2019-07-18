//dumb/presentational/stateless component
import React from 'react';

const Person = (props) => {
    return (
        <p onClick={ props.click }>
            { props.name }: { props.height * 100 } cm height, { props.children }
        </p>
    );
}

export default Person;