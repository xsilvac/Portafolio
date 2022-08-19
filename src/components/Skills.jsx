import React from 'react'
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { buildStyles } from 'react-circular-progressbar'

const Skills = ({technology, percent}) => {
  return (
    <div>
        <div style={{ width: 170, height: 170 }}>
        <CircularProgressbarWithChildren value={technology} styles={buildStyles({pathColor: `rgba(180, 117, 133, ${80 / 100})`,
            trailColor: '#D7B5BD',})}>
          <img style={{ width: 80, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
          <div style={{ fontSize: 20, marginTop: -5 }}>
            <strong>{technology}</strong><br/><strong style={{marginLeft: 15}}>{percent}%</strong>
          </div>
        </CircularProgressbarWithChildren>;
      </div>
    </div>
  )
}

export default Skills