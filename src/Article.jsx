//useState関数をインポート
import React, { useState } from 'react';
import LikeButton from './LikeButton'

//functional component
const Article = (props) => {
    //state毎にuseStateを宣言
    //　　　state変更名　　state変更関数　　　　　state初期値
    const [isPublished, toggleIsPublished] = useState(false);

    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.order}</p>
            <label htmlFor={"check"}>公開状態:</label>
            <input type="checkBox" checked={isPublished} id="check" onClick={() => toggleIsPublished(!isPublished)} />
            <LikeButton />
        </div>
    )
};
//check状態はpropsで渡されたisPublishedを参照している

export default Article