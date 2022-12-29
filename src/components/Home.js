import React, {Component} from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="main-card">
                <div className="main-text">
                    <p class="header">Hi, I'm Marc 👋</p>
                    <p>I'm a 3rd year computer science major at UC Berkeley pursuing a career in cybersecurity and Web3 security auditing. </p>

                    <p>Recently I cofounded DeFi at Berkeley and joined Berke1337, Berkeley's Cyber Defense Competition Team. Over the summer I interned at UnionDigital Bank as a software engineer.</p>
                        
                    <p>Outside of security, I'm passionate about learning how to trade crypto and I like to read, work out, play basketball, eat kbbq, and listen to edm. Ocassionally my friends and I make NFTs.</p>

                    <p>I work extremely hard on the things I care about and am confident in my ability to learn new technology quickly.</p>

                    <p>Check out my <a class="link">resume</a>.</p>
                </div>
                <div class="section">
                    <p class="header">Socials</p>
                    <div class="link-container">
                        <a class="button"> twitter </a>
                        <a class="button"> medium </a>
                        <a class="button"> github </a>
                        <a class="button"> linkedin </a>
                        <a class="button"> email </a>
                    </div>
                </div> 
                <div class="section">
                    <p class="header">Articles</p>
                    <div class="article">
                        <div class="date"> January 25, 2022 </div>
                        <div class="title"> January Recap </div>
                    </div>
                    <div class="article">
                        <div class="date"> January 20, 2022</div>
                        <div class="title"> Paradigm 2021 Solutions </div>
                    </div>
                    <div class="article">
                        <div class="date"> January 10, 2022</div>
                        <div class="title"> Damn Vulnerable Defi Solutions </div>
                    </div>
                    <div class="article">
                        <div class="date"> January 7, 2022</div>
                        <div class="title"> Ethernaut Solutions </div>
                    </div>
                    <div class="article">
                        <div class="date"> January 3, 2022</div>
                        <div class="title"> Capture the Ether Solutions </div>
                    </div>
                </div> 
            </div>  
        );
    }
}

export default Home;