import './counter.style.scss';
import React from 'react'
import CountUp from 'react-countup';
import RenderIfVisible from 'react-render-if-visible';

type CounterProps = {
    countFrom: number,
    countTo: number,
    content: string,
    countAddOn:string,
}

const Counter = ({ countFrom, countTo, content,countAddOn }: CounterProps) => {

    return (
        <div className='info-card' data-aos="fade-in">
            <RenderIfVisible defaultHeight={300} visibleOffset={50}>
                <div className="counter-wrapper">
                    <CountUp
                        start={countFrom}
                        end={countTo}
                        duration={2.2}
                        redraw={true}
                        className='count-up'
                    />
                    <span>{countAddOn}</span>
                </div>

                <div className='separator'></div>
            </RenderIfVisible >
            <div className='content-wrapper'>
                <h2>{content}</h2>
            </div>
        </div>
    )
}
export default Counter