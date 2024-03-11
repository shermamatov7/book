import React from 'react';
import './index.css'
import { AiOutlineArrowDown } from "react-icons/ai";


const Jurok = () => {
    return (
        <div id="jurok">
            <div className="container">
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }} className="jurok">
                    <h1>Возможно, Вам понравится</h1>
                    <div className="rr">
                        <input type="text" placeholder='Сортировка' />
                        <AiOutlineArrowDown className='bb' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jurok;