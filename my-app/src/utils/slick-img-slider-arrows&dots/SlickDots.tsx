import './SlickDots.scss';

export default function SlickDots(dots: any) {
    return (
        <div style={{ margin: '0 0 2.5rem 0' }}>
            <ul className="slick-dots-wrapper">
                {dots}
            </ul>
        </div>
    )
}