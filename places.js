import './places.css';
import img from './assets/sig.jpg';
import img1 from './photo/p1.png';
import img2 from './photo/p2.png';
import img3 from './photo/p3.png';
import img4 from './photo/i2.png';
import img5 from './photo/p5.png';
import img6 from './photo/p6.png';
import img7 from './photo/i4.png';
import img8 from './photo/i5.png';
import img9 from './photo/i3.png';

const Place = () =>{
    return(
        <>
            <img src={img} alt="background"></img>
            <h2>Places to explore</h2>
            <div class="grid-contain">
                <div class="grid-it"><img src={img1} alt="place1"></img></div>
                <div class="grid-it"><img src={img2} alt="place2"></img></div>
                <div class="grid-it"><img src={img3} alt="place3"></img></div>  
                <div class="grid-it"><img src={img4} alt="place4"></img></div>
                <div class="grid-it"><img src={img5} alt="place5"></img></div>
                <div class="grid-it"><img src={img6} alt="place6"></img></div>  
                <div class="grid-it"><img src={img7} alt="place7"></img></div>
                <div class="grid-it"><img src={img8} alt="place8"></img></div>
                <div class="grid-it"><img src={img9} alt="place9"></img></div>  
            </div>
        </>
    )
}

export default Place;