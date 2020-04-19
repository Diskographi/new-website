import React from 'react';
import './biography.css';

const bioStyle = {
    textAlign: 'center'
}

const innerStyle = {
    display: 'inline-block', 
    width: '50%',
    fontSize: '32px'
}

const english = <div className="innerBio">
    <h2> Web Design </h2>
    <p>I started my journey with web design in 2016. I am an entirely
       self-taught web developer. I started off with JavaScript due to
       it being an integral part of web design and have since branched out
       into frameworks such as Angular 1.X and React JS. I have also been 
       utilizing Node JS and Express JS in order to establish middleware 
       for communication with backend servers. I am an avid coder and derive 
       joy from problem solving and challenging myself. I can't wait to work
       with others and collaborate on larger and more complex projects.
    </p>
</div>;

const japanese = <div className="innerBio">
<h2> ウェブデザイン </h2>
<p>はじめまして。私の名前はコーディーと申します。２０１６年からプログラミングを勉強しております
　　授業を受けないで自分からは色々な取材を利用して就業します。JavaScriptの基本的な構図を学ん
　　でからたくさんのフレームワークを習うことにしました。例えば：Angular 1.X や React JS。
　　尚にNode JS と Express JS を使ってサーバーに繋がれるミドルウェアを書くことが可能です。
 毎日喜んでコーディングをしていて色々な仕事に関する問題を解いております。
   未来の同僚と協力するのをお楽しみにしております！
   よろしくお願いいたします。
</p>
</div>;

export class Biography extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            language: english
        }
    }

    toJapanese() {
        this.setState ({
            language: japanese
        })
    }

    toEnglish() {
        this.setState ({
            language: english
        })
    }

    componentDidMount() {
        window.scrollTo(0, window.scrollY)
      }


    render() {
        return <div className="outerBio">
            {this.state.language}
            <div className="aStyle">
              <button type="button" href="#" onClick={(e) => this.toEnglish(e)}>English</button>
              <button type="button" href="#" onClick={(e) => this.toJapanese(e)}>日本語</button>
            </div>
        </div>
    }
}