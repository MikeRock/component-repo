import {Component} from 'react'
import PropTypes from 'prop-types'
import worker from './worker.js'

export default class PushNotification extends Component {
    constructor(...args) {
        super(...args)
        this.run = this.run.bind(this)
        this.urlBase64ToUint8Array = this.urlBase64ToUint8Array.bind(this)
    }
    componentDidMount() {
        if('serviceWorker' in window.navigator && 'PushManager' in window)
            this.run().catch(err => console.error(err))
        else console.error('ServiceWorkers are not supported')
    }
    urlBase64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
          .replace(/\-/g, '+')
          .replace(/_/g, '/');
      
        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);
      
        for (let i = 0; i < rawData.length; ++i) {
          outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
      }

    run() {
        return window.navigator.serviceWorker.getRegistration('./worker.js').then(registration => {
            const subscribeOptions = {
                userVisibleOnly: true,
                applicationServerKey: this.urlBase64ToUint8Array(
                 this.props.publicKey || 'BEMF_FKAfnLhdTWsZcGO2w7XP5FvDBzLFMg5rbxKs82IOrwSEZ46eucBXDN5WT28b25Dc9XQKCToBYZQTkeXbIc'
                )
              }

            if(!registration) 
             return window.navigator.serviceWorker.register('./worker.js',{scope: '/'}).then((registration) => {
                  return registration.pushManager.subscribe(subscribeOptions)
            }).then((pushSubscription) => {
                const subscriptionObject = JSON.stringify(pushSubscription);
                return fetch(this.props.api || '/push', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: subscriptionObject
                  })
              }).then(res => {
                if(!res.ok) 
                throw new Error('Response not ok')
                return res.json()
              }).then(resObj => {
                console.log(resObj)
              })
              else  return registration.pushManager.subscribe(subscribeOptions)
              .then((pushSubscription) => {
                const subscriptionObject = JSON.stringify(pushSubscription);
                return fetch(this.props.api || '/push', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: subscriptionObject
                  })
              }).then(res => {
                if(!res.ok) 
                throw new Error('Response not ok')
                return res.json()
              }).then(resObj => {
                console.log(resObj)
              })
        })
    }
    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}

PushNotification.propTypes ={
    api: PropTypes.any,
    publicKey: PropTypes.any
}