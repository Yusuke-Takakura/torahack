import React from 'react';
import Article from './Article';

//クラスコンポーネント　reactのcomponentを継承している
class Blog extends React.Component {
    //classなのでconstructorの初期化が必要
    constructor(props) {
        //superを指定するとthis.propsが使用可能になる
        super(props);
        this.state = {
            isPublished: false
        };
    }

    //公開状態を反転させる
    togglePublished = () => {
        this.setState({
            isPublished: !this.state.isPublished
        });
    };

    render() {
        const authorName = "ultraK"
        return (
            <>
                //titleがprops,{}の中がjavascript
                <Article title={"Reactの使い方"} isPublished={this.state.isPublished} toggle={() => this.togglePublished()} />
            </>
        )
    }
}

export default Blog

