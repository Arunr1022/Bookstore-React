import Email from '../images/mail.png'
import Whatsapp from '../images/social.png'
import X from '../images/icons8-x-50.png'
import Face from '../images/facebook.png'
import Insta from '../images/camera.png'


function FootSec() {
    
    return(
        <>
        <hr />
        <div className="footersec">
        <p className="Footpara">NextChapter Bookstores draws book lovers of all ages into a community where they can discover great books, engage with booklovers and meet their favourite literary personalities</p>
        </div>

        <div className="footersec1">
            <img className='emailimg' src={Email} alt="...!" />
            <p className="about">estore@nextchapter.in</p>
        </div>

        <div className="footersec2">
        <img className="whatsappimg" src={Whatsapp} alt=""  />
        <p className="about1">9674531234</p>
        </div>

        <div className="footersec3">
            <p className="about2">
                Follow Us
            </p>
            <img src={X} alt="...!" className="facebookimg" />
            <img src={Face} alt="...!" className="instagramimg" />
            <img src={Insta} alt="...!" className="xtwitter" />
        </div>
        <hr />

        <div className="footersec4">
            <p className="copyright">
            © 2025 NextChapter Bookstores Pvt. Ltd. All Rights Reserved...
            </p>
        </div>
        </>
    )
}

export default FootSec