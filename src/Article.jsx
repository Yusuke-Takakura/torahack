import React from 'react';

//functional component
const Article = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <label htmlFor={"check"}>公開状態:</label>
            <input type="checkBox" checked={props.isPublished} id="check" onClick={() => props.toggle()} />
        </div>
    )
};

export default Article