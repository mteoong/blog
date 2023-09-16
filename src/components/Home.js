import React, {Component} from 'react';
import './Home.css';

class Home extends Component {  
    render() {
        return (
            <div className="main-card">
                <div className="main-text">
                    <p class="header">Marc Jeric Teo Ong</p>
                    <p class="subheader">Trader and BingX BD</p>
                </div>
                <div class="section">
                    <div class="link-container">
                        <a class="button" id="twitter" href = "https://twitter.com/mjto_BingX" target="_blank">  </a>
                        <a class="button" id="discord" href="https://discordapp.com/users/413988026469974019" target="_blank">  </a>
                        <a class="button" id="linkedin" href = "https://www.linkedin.com/in/mteoong/" target="_blank">  </a>
                        <a class="button" id="email" href = "mailto: mjto@bingx.com" target="_blank">  </a>
                        <a class="button" id="bingx" href = "https://bingx.com/" target="_blank">  </a>
                    </div>
                </div> 
            </div>  
        );
    }
}

export default Home;