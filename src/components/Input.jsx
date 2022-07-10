import React from 'react'

function Input({label,name,handleChange,value,inputType,error,placeHolder}) {
  return (
    <div className="form-group mb-3 d-flex flex-column margin-bottom-2">
      <label className='mb-2'>{label}</label>
      <input
        name={name}
        onChange={handleChange}
        value={value}
        type={inputType}
        className={"form-control"}
        placeholder={label}
      />
      {error && <div className='text-danger'>{error}</div>}
    </div>
  )
}

export default Input