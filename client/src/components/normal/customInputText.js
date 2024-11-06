import React from 'react'

function CustomInputText(props) {
  return (
    <div style={{ borderRadius: '50px', padding: '10px 20px', backgroundColor: '#f0f0f0'}}>
        <input placeholder={props.placeholder} style={{width: '100%', backgroundColor: '#f0f0f0', outline: 'none'}} onChange={props.onChange} />
        <span>{ props.error }</span>
    </div>
  )
}

export default CustomInputText