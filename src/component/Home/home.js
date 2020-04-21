import React from 'react'
import Instruction from './instruction'

const Home = () => {
    return (
        <div>
            <div>
                <marquee behavior = "scroll">
                    <h3 style={{
                        color:"red"
                    }}>
                        Read the instruction before starting your Examination
                    </h3>
                </marquee>
            </div>
            <Instruction/>
        </div>
    )
}
export default Home;