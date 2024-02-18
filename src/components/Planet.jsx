import './styles.css';
import {useState} from 'react';

export default function Planet({ data }) {

    return (
        <>
            <h1>Balance: ${(data - Math.floor(data)) !== 0 ? (data * 55).toFixed(2) : data * 55}</h1>
            <div className="random-planets">
                <div className="planet">
                    <h1 className="planet-title">Kepler-62 f</h1>
                    <p className="planet-distance">Distance From Sun: 
                    <span>{(data - Math.floor(data)) !== 0 ? data.toFixed(2) : data} Light Years</span></p>

                    <p className="population">Population: <br /> 
                    <span>{(data - Math.floor(data)) !== 0 ? (data * 28).toFixed(0) : data * 28}</span></p>

                    <p className="esi">Earth Similarity Index: <br /> 
                    <span>{data > 0 ? (data / (data * 28) * 6).toFixed(2) : 0}</span></p>

                    <p className="livable">Livable: <br />
                    <span>{data < 1000 || data > 50000 ? 'Yes' : 'No'}</span></p>

                    <p className="value">Planet Value: <br />
                    <span>${(data - Math.floor(data)) !== 0 ? (data * 27).toFixed(2) : data * 27}</span></p>
                </div>

                <div className="planet">
                    <h1 className="planet-title">Proxima b</h1>
                    <p className="planet-distance">Distance From Sun: 
                    <span>{(data - Math.floor(data)) !== 0 ? (data * 9).toFixed(2) : data * 9} Light Years</span></p>

                    <p className="population">Population: <br /> 
                    <span>{(data - Math.floor(data)) !== 0 ? (data * 23).toFixed(0) : data * 23}</span></p>

                    <p className="esi">Earth Similarity Index: <br /> 
                    <span>{data > 0 ? (data / (data * 23) * 9).toFixed(2) : 0}</span></p>

                    <p className="livable">Livable: <br />
                    <span>{data % 2 == 0 ? 'No' : 'Yes'}</span></p>

                    <p className="value">Planet Value: <br />
                    <span>${(data - Math.floor(data)) !== 0 ? (data * 35).toFixed(2) : data * 35}</span></p>
                </div>

                <div className="planet">
                    <h1 className="planet-title">Gliese 1002 c</h1>
                    <p className="planet-distance">Distance From Sun: 
                    <span>{(data - Math.floor(data)) !== 0 ? (data * 7).toFixed(2) : data * 7} Light Years</span></p>

                    <p className="population">Population: <br /> 
                    <span>{(data - Math.floor(data)) !== 0 ? (data * 16).toFixed(0) : data * 16}</span></p>

                    <p className="esi">Earth Similarity Index: <br /> 
                    <span>{data > 0 ? (data / (data * 16) * 14).toFixed(2) : 0}</span></p>

                    <p className="livable">Livable: <br />
                    <span>{data % 2 == 0 ? 'Yes' : 'No'}</span></p>

                    <p className="value">Planet Value: <br />
                    <span>${(data - Math.floor(data)) !== 0 ? (data * 50).toFixed(2) : data * 50}</span></p>
                    
                </div>
            </div>
        </>
    )
}