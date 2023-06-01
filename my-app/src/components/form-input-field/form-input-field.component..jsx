import './form-input-field.styles.scss';
import React from 'react';

export default function FormInputField({ label, ...otherProps }) {
    return (
        <div className ='form-input-wrapper'>
            <input className="form-input"{...otherProps} />
            {label &&
                <label
                    className={`${otherProps.value.length ? 'shrink' : ''
                        } form-input-label`}>
                    {label}
                </label>}
        </div>

    )
}
