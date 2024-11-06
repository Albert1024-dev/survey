import React from 'react'

function CustomTextArea(props) {
  return (
    <div style={{ borderRadius: '20px', padding: '10px 20px', backgroundColor: '#f0f0f0'}}>
        <textarea placeholder={props.placeholder} style={{width: '100%', backgroundColor: '#f0f0f0', outline: 'none'}} rows={props.rows} onChange={props.onChange} />
        <span>{ props.error }</span>
    </div>
  )
}

export default CustomTextArea