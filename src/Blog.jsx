import React from 'react';
import Article from './Article';

//クラスコンポーネント　reactのcomponentを継承している
class Blog extends React.Component {
    //classなのでconstructorの初期化が必要
    //constractorはstateの初期化
    constructor(props) {
        //superを指定するとthis.propsが使用可能になる
        super(props);
        this.state = {
            //Articleを非公開
            isPublished: false,
            count: 0
        };
    };

    //最初のrenderが走ったときに一度だけ呼ばれる
    //リスナーの設定やAPI通信に使われる
    componentDidMount() {
        //ボタンがクリックされたらいいねをカウントアップする
        //関数は関数型か関数だけを渡す記述　今回は関数だけを渡している
        document.getElementById("counter").addEventListener('click', this.countUp)
    }

    //renderが走るたびに呼ばれる
    //スクロールイベントや条件付きイベント
    componentDidUpdate() {
        //いいね数か10を超えたらカウントをリセットする
        if (this.state.count >= 10) {
            this.setState({ count: 0 })
        }
    }

    //コンポーネントが破棄される直前
    //リソースを解除するため
    //リスナーの解除など
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

    //VDOMを描画
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

