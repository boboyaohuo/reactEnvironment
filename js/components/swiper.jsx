import React from 'react';
import {Link} from 'react-router';
import style from '../../css/swiper-3.3.1.min.css'
import sty from '../../css/App.css'
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {count: 1};
//     this.myStyle = {
//         fontSize:'100px',
//     }
//     this.yourStyle = {
//         fontSize:'200px',
//     }
//   }
//   tick() {
//     this.setState({count: this.state.count + 1});
//   }
//   render() {
//     return (
//       <div onClick={this.tick.bind(this)} style={this.state.count > 2 ? this.yourStyle : this.myStyle}>
//         Clicks: {this.state.count*10}
//       </div>
//     );
//   }
// }

// var App = React.createClass({
//     render: function() {
//         return (
//             <div>
//                 <ProfilePic username={this.props.username} />
//                 <ProfileLink username={this.props.username} />
//             </div>
//         );
//     }
// });
//
// var ProfilePic = React.createClass({
//     render: function() {
//         return (
//             <img src={'http://graph.facebook.com/' + this.props.username + '/picture'} />
//         );
//     }
// });
//
// var ProfileLink = React.createClass({
//     render: function() {
//         return (
//             <a href={'http://www.facebook.com/' + this.props.username}>
//                 {this.props.username}
//             </a>
//         );
//     }
// });

const Swiper = React.createClass({
    componentDidMount:function () {
        var mySwiper = new Swiper('.swiper-container', {
        	autoplay: 5000,//可选选项，自动滑动
        })
    },

    render:function () {
        return(
            <div className={style.swiperContainer}>
                <div className={style.swiperWrapper}>
                    <div className={style.swiperSlide}>Slide 1</div>
                    <div className={style.swiperSlide}>Slide 2</div>
                    <div className={sty.mine_banner}>Slide 3</div>
                </div>
            </div>
        );
    }

})

export default Swiper;
