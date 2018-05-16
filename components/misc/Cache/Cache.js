import {Component} from 'react'
import PropTypes from 'prop-types' 
import worker from './worker.js'

export default class Cache extends Component {
    constructor(...args) {
        super(...args)
        this.run = this.run.bind(this)
    }

    run() {
        const config = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }}
        
            const promise = this.props.manifest ? new Promise((resolve, reject) => {
                resolve(btoa(JSON.stringify(this.props.manifest)))
            }): 
            fetch(this.props.api, config).then(resp => resp.json()).then(manifest => {
                const assets = Object.keys(manifest)
                .filter(item => item.indexOf('.map') == -1)
                .map(item => manifest[item])
                const param = btoa(JSON.stringify(assets))
                return param})

         return promise.then(param =>  window.navigator.serviceWorker.getRegistration(`./worker.js?param=${param}${this.props.version ? `&version=${this.props.version}` : ''}`).then(registration => {
        if(!registration) 
        return navigator.serviceWorker.register(`./worker.js?param=${param}${this.props.version ? `&version=${this.props.version}` : ''}`,{scope: '/'})
        .then(registration => {
            console.log(`GOT WORKER`)
        }) 
        else console.log(`GOT WORKER`)
  }))
    }
    componentDidMount() {
        if('serviceWorker' in window.navigator && 'PushManager' in window)
            this.run().catch(err => console.error(err))
    else console.error('ServiceWorkers are not supported')
    }
    render() {
        return (
        <div>{this.props.children}</div>
        )
    }
}
Cache.NO_VERSION = '0'
Cache.propTypes = {
    api: PropTypes.any,
    manifest: PropTypes.any,
    version: PropTypes.any
}

Cache.defaultProps = {
    api: '/manifest',
    version: Cache.NO_VERSION
}