import React from 'react';
import LikeButton from './LikeButton'

//functional component
const Article = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.order}</p>
            <label htmlFor={"check"}>公開状態:</label>
            <input type="checkBox" checked={props.isPublished} id="check" onClick={() => props.toggle()} />
            <LikeButton count={props.count} />
        </div>
    )
};
//check状態はpropsで渡されたisPublishedを参照している

export default Article