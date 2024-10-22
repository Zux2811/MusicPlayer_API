import React from 'react';
import './progressCircle.css';

const Circle = ({color, percentage, size, strokeWidth}) => {
    const radius = size / 2 - 10;
    const circ = 2 * Math.PI * radius - 20;
    const strokePct = ((100 - Math.round(percentage)) * circ) / 100;

    return (
        <circle
        r={radius}
        cx='50%' 
        cy='50%'
        fill='transparent'
        stroke={strokePct !== circ ? color : ''}
        strokeWidth={strokeWidth}
        strokeDasharray={circ}
        strokeDashoffset={percentage ? strokePct : 0}
        strokeLinecap='round'
        ></circle>
    );
};

export default function ProgressCircle({
    percentage,
    isPlaying,
    size,
    color,
    image,
}) {
  return (
    <div className='progress_circle flex'>
        <svg width={size} height={size}>
            <g>
                <Circle strokeWidth={'0.4rem'} color='#b0e2f3' size={size} />
                <Circle
                strokeWidth={'0.6rem'}
                color='#3e61d2'
                percentage={percentage}
                size={size}
                />
            </g>
            <defs>
                <clipPath id='myCircle'>
                    <circle  cx='50%' cy='50%' r={size / 2 - 30} fill='#FFFFFF'/>
                </clipPath>
                <clipPath id='myInnerCircle'>
                    <circle  cx='50%' cy='50%' r={size / 2 - 100} fill='#FFFFFF'/>
                </clipPath>
            </defs>
            <image
                className={isPlaying ? 'active' : ''}
                x={10}
                y={10}
                width={2 * ((size / 2) - 10)}
                height={2 * ((size / 2) - 10)}
                href='https://png.pngtree.com/png-clipart/20230408/ourmid/pngtree-vinyl-records-png-image_6693779.png'
                clipPath='url(#myCircle)'
            />
            <image
                className={isPlaying ? 'active' : ''}
                x={100}
                y={100}
                width={2 * ((size / 2) - 100)}
                height={2 * ((size / 2) - 100)}
                href={image}
                clipPath='url(#myInnerCircle)'
            />
        </svg>
    </div>
  );
}
