import React from 'react';

export default ({ input, id = input.name, label, meta, type = 'text', size = 's12'} ) => {

    return (
            <div className={`col ${size} input-field`}>
                <input {...input} id={id} type={type} />
                <label htmlFor={id} >{label}</label>
                <p className="red-text">{meta.touched && meta.error}</p>
                {/* <p className="red-text">{meta.touched && meta.error? meta.error : ''}</p> */}
            </div>
    );
}