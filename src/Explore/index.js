import { FaTelegram } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import './index.css'



const Explore = ()=>{
    return(
        <div className='explore-container'>
            <div className='explore-top-container'>
                <h1 className='explore-heading'>
                    Explore Our dApp
                </h1>
                <p className='para'>
                    EthAI is an AI-Powered dApp designed to help traders make smarter,data-driven decisions. 
                    By tracking smart moeny flows,monitoring key wallets,and providing real-time market insights,
                    EthAi empowers users to stay ahead of trends. the platforms offers intuitive AI featurea for
                     assets recommendations, market analyis, and personilized crypto 
                    Q&A, making it the ultimate tool for both novice and experienced traders.

                </p>

                <button className='button'>Open dApp</button>
            </div>
            <div className='contact-container'>
                <div className='twitter-container'>
                    <h1 className='track'>EthAI</h1>
                    <div className='icons'>
                    <FaTelegram />
                    <FaInstagramSquare />
                    <FaSquareXTwitter />
                    <FaFacebook />

                    </div>
                </div>
                <div className="des-container">
                    <p className="note">"Designed for traders of today,just like you"</p>
                    <div className="input-cont">
                        <p className="email">What's your work Email</p>
                        <button className="started">Get Started</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Explore