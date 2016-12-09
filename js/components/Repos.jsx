import React from 'react';
import {Link} from 'react-router';
import style from '../../css/App.css';
var Repos = React.createClass({
    render:function(){
        return(
            <div className={style.mine_banner}>
                <span><Link to="/about">点击跳转</Link></span><br/>
                <span>6669</span>
            </div>
        )
    }
})





export default Repos;
