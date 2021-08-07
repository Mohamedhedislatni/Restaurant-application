import React from 'react'
import './AboutUs.css'
import instes from './instes.png';
import fbtes from './fbtes.png';

import {
    FaPhoneVolume,
} from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

function AboutUs() {
    return (
        <div className="prinabout">

            <h3 className="ktiba"><span className="spanklam">707 Café Resto</span> is the reference for Coffee Lounge <span className="spanklam">&</span> Restaurant.<br /> Find us at
                El Menara, Gabes</h3>
            <iframe className="map707" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.2587428242578!2d10.104937114363702!3d33.85722208065952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12556e46590dedef%3A0x21c99d97d41e28e7!2s707%20Complexe!5e0!3m2!1sfr!2stn!4v1628071416708!5m2!1sfr!2stn"
                style={{ width: "800", height: "600", style: "border:0;", allowfullscreen: "loading", loading: "lazy" }}></iframe>
            <div>
                <h2 className="ktiba">Or contact us :</h2>
                <div className="iconlol">
                    <FaPhoneVolume size={30} />
                    <h4> : </h4>
                    <h4>28 538 700</h4>

                </div>
                <div className="iconlol">
                    <MdEmail size={30} />
                    <h4> : </h4>
                    <h4>707touaticlub@gmail.com</h4>
                </div>
                <div className="iconlol">
                   
                        <a  href="https://www.facebook.com/707CafeResto/"><img style={{width:"38px", height:"38px"}} src={fbtes} alt="fb"/></a>
                        <a href="https://www.instagram.com/explore/locations/377083819430144/tunisia/gabes/707-cafe-resto/"><img style={{width:"40px", height:"40px"}} src={instes} alt="ins" /></a>
                    
                </div>


            </div>
        </div>
    )
}

export default AboutUs