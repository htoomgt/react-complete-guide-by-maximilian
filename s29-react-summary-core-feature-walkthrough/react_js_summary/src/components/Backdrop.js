import React from 'react'

const Backdrop = (props) => {
  return (
    <div className="backdrop" onClick={props.onCancel} >Backdrop</div>
  )
}

export default Backdrop