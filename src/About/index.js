import './index.css'

const About = ()=> {
    return(
        <section className='about-container' id="about-section">
            <div className='about-top-container'>
                <h1 className='heading'>About EthAi</h1>
                <p className='para'>At EthAi, we're all about making
                     crypto trading easier and more intuitive. We provide tools that 
                     help traders keep up with all new market trends, track top traders movements.
                     </p>
                     <button className='button'>Read more</button>
                     
            </div>
            <div className='about-down-container'>
                <div className='top-one'>
                    <div className='stay-container'>
                        <h1 className='trade'>Stay Ahead</h1>
                        <p className='para'>No more guesswork-get clear trustable insights</p>
                    </div>
                    <div className='assets-container'>
                        <h1 className='trade'>Know Your Assets</h1>
                        <p className='para'>Always stay on top of how your investments are performing.</p>
                    </div>
                </div>
                <div className='down-one'>
                    <div className='simple-container'>
                        <h1 className='trade'>Simple,Not Overwhelming</h1>
                        <p className='para'>Our tools are designed to make 
                            complex maket analysis easy to understand and act on.</p>
                    </div>
                    <div className='future-container'>
                        <h1 className='trade'>Future-Proof</h1>
                        <p className='para'>We're constantly improving,
                             adding new features to help you make the most informed decisions possible.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About