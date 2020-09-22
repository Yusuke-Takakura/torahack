import React from 'react';
import Article from './Article';
// import { Foo, Bar } from './components/FooBar'
//下と同値
//基本的には１ファイルに１モジュール
import * as FooBar from './components/FooBar';
import Hoge from './components/Hoge';

//クラスコンポーネント　reactのcomponentを継承している
const Blog = () => {
    // //最初のrenderが走ったときに一度だけ呼ばれる
    // //リスナーの設定やAPI通信に使われる
    // componentDidMount() {
    //     //ボタンがクリックされたらいいねをカウントアップする
    //     //関数は関数型か関数だけを渡す記述　今回は関数だけを渡している
    //     document.getElementById("counter").addEventListener('click', this.countUp)
    // }

    // //renderが走るたびに呼ばれる
    // //スクロールイベントや条件付きイベント
    // componentDidUpdate() {
    //     //いいね数か10を超えたらカウントをリセットする
    //     if (this.state.count >= 10) {
    //         this.setState({ count: 0 })
    //     }
    // }

    // //コンポーネントが破棄される直前
    // //リソースを解除するため
    // //リスナーの解除など
    // componentWillUnmount() {
    //     document.getElementById("counter").removeEventListener("click", this.countUp)
    // }

    //公開状態を反転させる

    // countUp = () => {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // };

    return (
        <>
            <Article
                title={"Reactの使い方"}
            />
            <FooBar.Foo />
            <FooBar.Bar />
            <Hoge />
        </>
    )


}
//titleがprops,{}の中がjavascript

export default Blog

