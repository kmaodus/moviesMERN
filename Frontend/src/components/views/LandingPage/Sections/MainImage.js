import React from 'react'
import { Typography } from 'antd';
import "./LandingPage.css"

const { Title } = Typography;

function MainImage(props) {

    const Countdown = () => {
        setInterval(() => {
            var date = new Date();
            var date1 = new Date(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds())
            var date2 = new Date(props.date + " 00:00:00");
            var diff = {};
            var tmp = date2 - date1;
            tmp = Math.floor(tmp / 1000);
            diff.sec = tmp % 60;
            tmp = Math.floor((tmp - diff.sec) / 60);
            diff.min = tmp % 60;
            tmp = Math.floor((tmp - diff.min) / 60);
            diff.hour = tmp % 24;
            tmp = Math.floor((tmp - diff.hour) / 24);
            diff.day = tmp;
            console.log('test', diff);
            if (date1 < date2) {

                document.getElementById('day').innerHTML = diff.day + "<br>Jours";
                document.getElementById('hour').innerHTML = diff.hour + "<br>Heures";
                document.getElementById('minute').innerHTML = diff.min + "<br>Minutes";
                document.getElementById('seconde').innerHTML = diff.sec + "<br>Secondes";

            }
        }, 1000)
    }

    const CheckCountdown = () => {
        var date = new Date();
        var date1 = new Date(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds())
        var date2 = new Date(props.date + " 00:00:00");
        if (date1 < date2) {
            return (
                <div className="Countdown" onload={Countdown()}>
                    <Title style={{ color: 'white', }}>Compte à rebours :</Title>
                    <div className="TimeCountdown">
                        <div className="Time" id="dayTime"><h1 id="day" ></h1></div>
                        <div className="Time" id="hourTime"><h1 id="hour" ></h1></div>
                        <div className="Time" id="minuteTime"><h1 id="minute" ></h1></div>
                        <div className="Time" id="secondeTime"><h1 id="seconde" ></h1></div>
                    </div>
                </div>
            )
        }

    }

    return (
        <div className="MainImage" style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0) 39%,rgba(0,0,0,0) 41%,rgba(0,0,0,0.65)100%),url('${props.image}'), #1c1c1c`, height: '500px', backgroundSize: '100%, cover', backgroundPosition: 'center, center', width: '100%', position: 'relative' }}>
            {/* <div className="Details"> */}
            <div className="Description"  >
                <Title style={{ color: 'white' }} level={2} > {props.title} </Title>
                <p style={{ color: 'white', fontSize: '1rem' }} >{props.text}</p>
            </div>
            {CheckCountdown()}
        </div>

        // </div>
    )
}

export default MainImage