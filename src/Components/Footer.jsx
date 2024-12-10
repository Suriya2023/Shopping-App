import React,{useEffect} from 'react'
import './Footer.css'
function Footer(props) {
    useEffect(() => {
        const elements = document.querySelectorAll('.column');
        const handleScroll = () => {
            const viewportHeight = window.innerHeight;
            elements.forEach(element => {
                const boundingRect = element.getBoundingClientRect().top;
                if (boundingRect < viewportHeight) {
                    element.classList.add('fire');
                } else {
                    element.classList.remove('fire');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    // useEffect(() => {
    //     const elements1 = document.querySelectorAll('columnn');
    //     const handleScrolll = () => {
    //         const viewportHeight = window.innerHeight;
    //         elements1.forEach(element => {
    //             const boundingRect = element.getBoundingClientRect().top;
    //             if (boundingRect < viewportHeight) {
    //                 element.classList.add('fire');
    //             } else {
    //                 element.classList.remove('fire');
    //             }
    //         });
    //     };

    //     window.addEventListener('scroll', handleScrolll);

    //     return () => window.removeEventListener('scroll', handleScrolll);
    // }, []);
    return (
        <div>

            <div className={`footer text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode === 'light' ? 'light' : 'dark'}`}>
                <hr />
                {/* <hr /> */}
                <br />
                <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <div className="column">
                        <h4 style={{ fontStyle: 'oblique', fontWeight: '600' }}>Get to Know Us</h4>
                        <ul>
                            <li><a style={{ fontStyle: 'oblique' }} href="#">About Shops</a></li>
                            <li><a style={{ fontStyle: 'oblique' }} href="#">Careers</a></li>
                            <li><a style={{ fontStyle: 'oblique' }} href="#">Press Releases</a></li>
                            <li><a style={{ fontStyle: 'oblique' }} href="#">Shops Science</a></li>
                        </ul>
                    </div>
                    <div   className="column">
                        <h4 style={{ fontStyle: 'oblique', fontWeight: '600' }}>Connect with Us</h4>
                        <ul>
                            <li><a style={{ fontStyle: 'oblique' }} href="#">Facebook</a></li>
                            <li><a style={{ fontStyle: 'oblique' }} href="#">Twitter</a></li>
                            <li><a style={{ fontStyle: 'oblique' }} href="#">Instagram</a></li>
                        </ul>
                    </div>
                    <div  className="column">
                        <h4 style={{ fontStyle: 'oblique', fontWeight: '600' }}>Make Money with Us</h4>
                        <ul>
                            <li><a style={{ fontStyle: 'oblique' }} href="#">Sell on Shops</a></li>
                            <li><a style={{ fontStyle: 'oblique' }} href="#">Sell under Shop Accelerator</a></li>
                            <li><a style={{ fontStyle: 'oblique' }} href="#">Protect and Build Your Brand</a></li>
                            <li><a style={{ fontStyle: 'oblique' }} href="#">Shops Global Selling</a></li>
                            <li><a style={{ fontStyle: 'oblique' }} href="#">Supply to Shops</a></li>
                            <li><a style={{ fontStyle: 'oblique' }} href="#">Become an Affiliate</a></li>
                            <li><a style={{ fontStyle: 'oblique' }} href="#">Fulfillment by Shops</a></li>
                            <li><a style={{ fontStyle: 'oblique' }} href="#">Advertise Your Products</a></li>
                            <li><a style={{ fontStyle: 'oblique' }} href="#">Shops Pay on Merchants</a></li>
                        </ul>
                    </div>
                    <div  id='column3' className="column">
                        <h4 style={{ fontStyle: 'oblique', fontWeight: '600' }}>Let Us Help You</h4>
                        <ul>
                            <li><a style={{ fontStyle: 'oblique' }} href="#">Your Account</a></li>
                            <li><a style={{ fontStyle: 'oblique' }} href="#">Returns Centre</a></li>
                            <li><a style={{ fontStyle: 'oblique' }} href="#">Recalls and Product Safety Alerts</a></li>
                            <li><a style={{ fontStyle: 'oblique' }} href="#">100% Purchase Protection</a></li>
                            <li><a style={{ fontStyle: 'oblique' }} href="#">Shops App Download</a></li>
                            <li><a style={{ fontStyle: 'oblique' }} href="#">Help</a></li>
                        </ul>
                    </div>
                </div>
                <hr />

                <div className="footer-bottom">
                    <p style={{ fontStyle: 'oblique', fontSize: '1rem', hover: 'underline' }}>&copy; 2024 Shop</p>
                    <h1 style={{ fontStyle: 'oblique', fontSize: '1rem', hover: 'underline' }}> Made with ❤️ by <a href="/">Suraj Singh Rajput</a></h1>
                </div>
            </div>
        </div>
    )
}

export default Footer
