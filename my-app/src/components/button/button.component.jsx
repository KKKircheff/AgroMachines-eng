import './button.styles.scss';

const BUTTON_TYPE = {
    google: 'google-sign-in',
    inverted: 'inverted',
    default: 'default'
}


export default function Button ({ children, buttonType, ...otherProps }) {
    return (
        <button
            className={`button-container ${BUTTON_TYPE[buttonType]}`}
            {...otherProps}
        >
            {children}
        </button>
    )
}
