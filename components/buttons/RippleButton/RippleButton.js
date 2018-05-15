import {Component} from 'react'
import _ from './styles.scss'
import {TweenMax, Cubic} from 'gsap'

export default class RippleButton extends Component {
    constructor(...args) {
        super(...args)
        this.onTouch = this.onTouch.bind(this)
    }
    onTouch(e) {
   TweenMax.killAll(true)
    let x = e.pageX - this.el.getBoundingClientRect().left - (this.ripple.offsetWidth / 2) - 1
    let y = e.pageY - this.el.getBoundingClientRect().top - (this.ripple.offsetHeight / 2) - 1  
    this.ripple.style.left =  `${ x }px`
    this.ripple.style.top = `${ y }px`
    this.ripple.style.display = 'block'
    console.log(this.ripple.offsetHeight)
    TweenMax.to ( this.ripple, 1, { scale: 10, opacity: 0,ease: Cubic.easeOut ,onComplete: 
        () => {
          TweenMax.to( this.ripple, 0, {scale:1, opacity:0.4});
          this.ripple.style.display = 'none';
        }
       });


    }
    componentDidMount() {
        if('ontouchstart' in window)
        this.el.addEventListener('touchstart',this.onTouch)
        else
        this.el.addEventListener('mousedown',this.onTouch)
    }
    
    render() {
        return (
            <div ref={el => this.el = el} className={_["button__wrapper"]}>
                <div className={_["button"]}>BUTTON</div>
                <div ref={el => this.ripple = el} className={_["button__ripple"]}></div>
            </div>
        );
    }
}
