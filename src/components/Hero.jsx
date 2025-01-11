import './Hero.css';
const HeroSection = () =>{
    return (
        <>
        <main className="hero">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE 
                    TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE 
                    THE BEST AND WE'RE HERE TO HELP YOU WITH OUR 
                    SHOES.
                </p>

                {/* button  */}
                <div className="hero-btn">
                    <button className='shope'>Shop Now</button>
                    <button className='cat'>Category</button>
                </div>

              <div className="shopping">
                <p>Also Available On</p>
                <div className="brand-icons">
                    <img src="/Image/amazon.png" alt="amazon-logo"/>
                    <img src="/Image/flipkart.png" alt="flipkar-logo"/>
                </div>
            </div>  

            </div>
            <div className="hero-image">
            <img src="/Image/hero-image.png" alt="hero-image"/>
            </div>
        </main>
        </>
    );
}

export default HeroSection;