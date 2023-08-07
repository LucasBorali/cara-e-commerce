import React from 'react'

import classes from './Loading.module.css'

const Loading = () => {
  return (
    <div className={classes.preloader}>
        <svg>
            <circle cx='65' cy='65' r='50'></circle>
        </svg>
    </div>
  )
}

export default Loading