import React from 'react';
import detektiv from '../../images/detektiv.jpg'
import fantastika from '../../images/fantastika.jpg'
import pri from '../../images/pri.jpeg'
import na from '../../images/na.jpg'
import './index.css'

const Categori = () => {
    return (
        <div id="categori">
            <div className="container">
                <div style={{
                    margin: "30px 0"
                }} className="inputt">
                    <h1>Категории </h1>
                </div>
                <div className="categori" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <img style={{ width: '280px', height: '170px', borderRadius: '10px', }} src={detektiv} alt="" />
                    <img style={{ width: '300px', height: '170px', borderRadius: '10px', }} src={fantastika} alt="" />
                    <img style={{ width: '295px', borderRadius: '10px', }} src={pri} alt="" />
                    <img style={{ width: '280px', borderRadius: '10px', }} src={na} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Categori;