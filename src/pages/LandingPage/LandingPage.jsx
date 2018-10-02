import React from 'react';
import './LandingPage.css';
import LandingBanner from '../../components/LandingBanner/LandingBanner';
import LandingCarousel from '../../components/LandingCarousel/LandingCarousel';
import NavBar from '../../components/NavBar/NavBar';

class LandingPage extends React.Component {


    render() {
        return (
            <div className='LandingPage'>
                <LandingBanner />
                <NavBar />
                <div className='SearchBar'>
                    <input placeholder='I am looking for ...'/>
                </div>
            </div>
        )
    }
}

export default LandingPage;