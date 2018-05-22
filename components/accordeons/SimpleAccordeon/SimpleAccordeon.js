import {Component} from 'react'
import _ from './styles.scss'
export default class SimpleAccordeon extends Component {
constructor(...args) {
    super(...args)
    this.state = {checked: false}
}
componentDidMount() {
    this.checkbox.addEventListener('change',(e) => {
        if(this.checkbox.checked)
        this.setState({checked: true})
        else  this.setState({checked: false})

        console.log(this.checkbox.checked)
    })
}
render()
 {
     return (
         <div className={_["accordeon"]}>
             <div className={_["panel"]}>
                 <div className={_["panel__heading"]}>
                     <input ref={el => {this.checkbox=el}} type="checkbox" className={_["accordeon__checkbox"]} id="checkbox"/>
                     <label className={_["accordeon__label"]} htmlFor="checkbox"></label>
                     <div className={_["panel__name"]}>Item #1</div>
                 </div>
                 <div className={`${_["panel__body"]} ${this.state.checked ? _["accordeon--collapsed"]: ''}`}>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate voluptatum laudantium aspernatur ad, ab ratione excepturi? In iste sequi impedit quidem, ea molestias corrupti vel iure nihil cumque. Unde, aspernatur.
                 </div>
             </div>
         </div>
     )
 }
}