import './index.css'

const Tokenmonics =() => {
    return(
        <section className='tokenomics-container' id="tokenomics-section">
            <h1 className='trade'>Tokenmonics</h1>
            <div className='tokenomic'>
            <div className='picture'>
            <img src="https://res.cloudinary.com/dv9pez6sa/image/upload/v1729064255/Donut_rlkfuo.png" alt="graph"className='image'/>
            </div>
            <div >
            <div className='name-container'>
                <div className="name">
                    <p className='naming'>Name </p>
                    <p className='value'> :   EthAI</p>
                </div>
                <div className="name">
                    <p className='naming'>Token Name </p>
                    <p className='value'> :   $EthAI</p>
                </div>
                <div className="name">
                    <p className='naming'>Token Standard </p>
                    <p className='value'> :   ERC20</p>
                </div>
                <div className="name">
                    <p className='naming'>Blockchain</p>
                    <p className='value'> :   Ethereum</p>
                </div>
                <div className="name">
                    <p className='naming'>Total supply </p>
                    <p className='value'> :   100 Million</p>
                </div>
                <div className="name">
                    <p className='naming'>Tax </p>
                    <p className='value'> :   5%/5%</p>
                </div>
            </div>
            <div className='team'>
            <div className="name">
                    <p className='naming'>Team </p>
                    <p className='value'> :   35%</p>
                </div>
                <div className="name">
                    <p className='naming'>marketing </p>
                    <p className='value'> :   5%</p>
                </div>
                <div className="name">
                    <p className='naming'>Liquidity Pool</p>
                    <p className='value'> :   90%</p>
                </div>
            </div>
            </div>
            </div>
            
        </section>

    )
}
export default Tokenmonics