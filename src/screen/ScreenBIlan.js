import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Bilan from '../components/Bilan'

class ScreenBilan extends React.Component {



    render(){
        return(
            <div className="">
                <Header />
                <Bilan />
                <Footer />
            </div>
        )
    }
}