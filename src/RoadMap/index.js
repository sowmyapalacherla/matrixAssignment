import './index.css'

const RoadMap = ()=> {
    return(
        <section className='map-container' id="roadmap-section">
            <h1 className='top-heading'>Roadmap</h1>
            <div className='kick-container'>
                <div className='phase-container'>
                    <h1 className='phase'>PHASE 1</h1>
                    <h1 className='kick'>Kicking Off</h1>
                    <ul className='kick-list'>
  <li>Launch of EthAi: Officially</li>
  <li>Development of Core AI Agents</li>
  <li>User Onboarding Campaign</li>
  <li>Community Engagement Initiatives</li>
</ul>
                </div>
                <div className='pic-container'>
                    <img src="https://res.cloudinary.com/dv9pez6sa/image/upload/v1729066920/image_ymo7wq.svg" alt="d-image" className='d-image'/>
                </div>
                </div>     

                <div className='kick-container'>
                <div className='pic-container'>
                    <img src="https://res.cloudinary.com/dv9pez6sa/image/upload/v1729066685/image_2_a1anxx.svg" alt="d-image" className='d-image'/>
                </div>
                <div className='phase-container'>
                    <h1 className='phase'>PHASE 2</h1>
            
                    <h1 className='kick'>Bigger Insights</h1>
                    <ul className='kick-list'>
                        <li>Introduction of Advanced AI agents</li>
                        <li>Strategic partnerships</li>
                        <li>UserbInterface Optimization</li>
                        <li>Comprehensive Marketing Campaign</li>
                    </ul>
                </div>
                
                </div>  
                <div className='kick-container'>
                
                <div className='phase-container'>
                    <h1 className='phase'>PHASE 3</h1>
                    <h1 className='kick'>Full Power</h1>
                    <ul className='kick-list'>
                        <li>Introduction to Enhanced Features</li>
                        <li>API Integration for Data Access</li>
                        <li>Launch of Community-Driven Initiatives</li>
                        <li>Continuous Improvement and Updates</li>
                    </ul>
                </div>
                <div className='pic-container'>
                    <img src="https://res.cloudinary.com/dv9pez6sa/image/upload/v1729066159/image_1_lap0jv.svg" alt="d-image" className='d-image'/>
                </div>
                
                </div>  
                <div className='kick-container'>
                <div className='pic-container'>
                    <h1 className='kick'>Frequently Asked Questions</h1>
                </div>
                <div className='phase-container'>
               
                  
                    <ul className='kick-list-questions'>
                        <li>What is EthAI</li>
                        <li>How can EthAI can help me as a trader</li>
                        <li>Who can use EthAI</li>
                        <li>How does EthAI track smart money Flow</li>
                        <li>How does ensure data security</li>
                    </ul>
                </div>
              
                </div>  
       </section>
    )
}
export default RoadMap