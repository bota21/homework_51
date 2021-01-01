import { React } from 'react';
import './number.css';
const Number = props => {
    return (
        <div className='wrapper_number'>
        <div className='number'>{props.number}</div>
        </div>
        )
    };
    export default Number;
    