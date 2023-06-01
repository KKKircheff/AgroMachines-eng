import './form-text-area.styles.scss';
import React from 'react';


export default function FormTextArea({label='', ...otherProps }) {
    return (
        <div className ='form-textarea-wrapper'>
            <textarea className="form-input"{...otherProps} />
            {label &&
                <label
                    className={`${otherProps.value.length ? 'shrink' : ''
                        } form-textarea-label`}>
                    {label}
                </label>}
        </div>

    )
}