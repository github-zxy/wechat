import React, { Component } from 'react';

class Left extends Component {
    render() {
        return (
            <div className="left" style={{ }}>
                <ul>
                    <li ><a href="i">微信PC版</a></li>
                    <li>|</li>
                    <li><a href="i">中文</a></li>
                    <li>|</li>
                    <li><a href="i">繁体</a></li>
                    <li>|</li>
                    <li><a href="i">English</a></li>
                    <li>|</li>
                    <li><a href="i">微信隐私保护指引</a></li>
                    <li>|</li>
                    <li><a href="i">腾讯微信软件许可及服务协议</a></li>
                </ul>
            </div>
        );
    }
}

export default Left;