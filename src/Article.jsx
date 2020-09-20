import React from 'react';

const Article = (props) => {
    let publishState = "";
    if (props.isPublished) {
        publishState = "公開"
    } else {
        publishState = "非公開"
    }
    return (
        <div>
            <h2>{props.title}</h2>
            <p>順番は{props.order}です．</p>
            <p>著者：{props.author}</p>
            <p>{publishState}</p>
        </div>
    )
}
export default Article