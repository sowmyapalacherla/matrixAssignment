import './index.css'

const features = ()=> {
    return(
        <section className='features-container' id="feature-section">
            <div className='top-container'>
               <div className='first-container'>
                <div className='outer-ring'>
                    <div className='middle-ring'>
                        <div className='inner-ring'>

                        </div>
                    </div>
                </div>
                <h1 className='trade'>Trade Optimizer</h1>
                <p className='para'>
                    Find the right mimemts to buy or sell, 
                    with pesonalized  trade suggestions designed to help you
                     make the most of every opportunity
                </p>
               </div> 
               <div className='middle-container'>
                <div className='top-one-container'>
                    <h1 className='trade'>Market Insight</h1>
                    <p className='para'> Stay head of the market. Get real-time 
                        updates on market trends, track top traders movements, and spot signals from key influencers.</p>
                </div>
                <div className='cont'></div>
               </div>

               <div className='last-container'>
                <div className='photo-cont'>
                    
                </div>
                <h1 className='trade'>Risk Guard</h1>
                <p className='para'>
                   Get alerts on marketswings and potential risks
                   before they impact your portfolio.This gent helps
                    you navigte volatility and stay prepared for anything
                </p>
               </div> 
               </div>

               <div className='down-container'>
                <div className='left-container'>
                    <h1 className='trade'>Portfolio Sync</h1>
                    <p className='para'>Easily manage your portfolio. 
                    You'll always know what you own,how it's performing, and where it's headed</p>
                </div>
                <div className='right-container'>
                    <h1 className='trade'>Opportunity Scout</h1>
                    <p className='para'>Find exciting new projects, events and tokens that others might be missing.
                        Identifying promising opportunites early,so you never miss out on the next big thing.
                    </p>
                </div>
               </div>

        </section>

    )
}

export default features