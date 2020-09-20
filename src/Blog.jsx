import React from 'react';
import Article from './Article';

//クラスコンポーネント　reactのcomponentを継承している
class Blog extends React.Component {
    //classなのでconstructorの初期化が必要
    constructor(props) {
        //superを指定するとthis.propsが使用可能になる
        super(props);
        this.state = {
            //Articleを非公開
            isPublished: false,
            count: 0
        };
    };

    componentDidMount() {
        //ボタンがクリックされたらいいねをカウントアップする
        //関数は関数型か関数だけを渡す記述　今回は関数だけを渡している
        document.getElementById("counter").addEventListener('click', this.countUp)
    }

    componentDidUpdate() {
        //いいね数か10を超えたらカウントをリセットする
        if (this.state.count >= 10) {
            this.setState({ count: 0 })
        }
    }

    componentWillUnmount() {
        document.getElementById("counter").removeEventListener("click", this.countUp)
    }

    //公開状態を反転させる
    togglePublished = () => {
        this.setState({
            isPublished: !this.state.isPublished
        });
    };

    countUp = () => {
        this.setState({
            count: this.state.count + 1
        })
    };

    render() {
        const authorName = "ultraK"
        return (
            <>
                <Article
                    title={"Reactの使い方"}
                    isPublished={this.state.isPublished}
                    toggle={() => this.togglePublished()}
                    count={this.state.count}
                />
            </>
        )
    }
}
//titleがprops,{}の中がjavascript

export default Blog

