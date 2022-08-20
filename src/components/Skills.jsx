import React from 'react'
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { buildStyles } from 'react-circular-progressbar'

const Skills = ({technology, percent, image}) => {
  return (
    <div>
        <div style={{ width: 170, height: 170 }}>
        <CircularProgressbarWithChildren value={percent} styles={buildStyles({pathColor: `rgba(180, 117, 133, ${80 / 100})`,
            trailColor: '#D7B5BD',})}>
              <div style={{ fontSize: 20}}>
                <strong>{technology}</strong><br/>
              </div>
              <img style={{ width: 60, marginTop: -5 }} src={image} alt="" />
              <div style={{ fontSize: 20, marginTop: -5 }}>
                <strong>{percent}%</strong>
              </div>
        </CircularProgressbarWithChildren>;
      </div>
    </div>
  )
}

export default Skills