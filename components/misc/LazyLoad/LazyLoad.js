import {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {isReactComponent} from './../../helpers/utils'
/**
 * 
 * Added process.env.DYNAMIC_PATH to work with DefinePlugin and get half-dynamic chunks
 * Make sure the DefinePlugin is BEFORE the CommonsChunkPlugin
 */

export class LoazyLoad extends Component {
    constructor(...args) {
        super(...args)
        this.inView = this.inView.bind(this)
        this.imgArr
    }

    findReactParent = function(dom) {
        for (var key in dom) {
            if (key.startsWith("__reactInternalInstance$")) {
                var compInternals = dom[key]._currentElement;
                var compWrapper = compInternals._owner;
                var comp = compWrapper._instance;
                return comp;
            }
        }
        return null;
    };
    inView(ref) {
        const rect = ref.getBoundingClientRect()
       return  rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    }
    componentDidMount() {
    imgArr.forEach(item => {
        let ref
        if(isReactComponent(item.ref)) ref = ReactDOM.findDOMNode(item.ref)
        else ref = item.ref
        ref.addEventListener('scroll',(e) => {
            e.preventDefault()
           if(inView(ref)) {
               const target = ref
               if(this.props.dynamic) import(/* webpackMode: lazy-once, webpackChunkName: dynamic */`${process.env.DYNAMIC_PATH}/${target.getAttribute('data-src')}`)
               .then( ({default: item}) => { this.props.onLoad(item, target); target.classList.remove('lazy__item--blurred')})
               else  {
                   this.props.onLoad(target.getAttribute('data-src'), target)
                  target.classList.remove('lazy__item--blurred') 
                }
            }
            })
    })
    }
    render() {
        const children = React.Children.map(this.props.children,(child, index) => 
        React.cloneElement(child, {
            className:`${child.props.className ||  ''} lazy__item ${this.props.blur ? ' lazy__item--blurred': ''}`, 
            ref: (el) => {
                el && this.imgArr.push(
                    {index,ref: el}); typeof child.ref === 'function' && child.ref(el)}, 
                "data-id": index, key: index
                    }, child.props.children)
        )
       retrun ( 
       <div ref={(el) => this.parent = el}className="lazy">
            {children}
       </div>
        )
    }
}

LoazyLoad.propTypes = {
    onLoad: PropTypes.func,
    dynamic: PropTypes.bool,
    blur: PropTypes.bool
}

LoazyLoad.defaultProps = {
    dynamic: false,
    onLoad: (data, target) => {
        target.setAttribute('src',data);
        target.onload = (e) => {target.removeAttribute('data-src')}
    } 
}

export const lazy = data => _Component => class extends Component {
constructor(...args) {
  super(...args)  
}
render() {
    return (
        <_Component data-src={data} />
    )
}
}
