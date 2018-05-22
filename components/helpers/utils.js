import React from 'react'

function isClassComponent(component) {
    return (
        typeof component === 'function' && 
        !!component.prototype.isReactComponent
    ) ? true : false
}

export function isFunctionComponent(component) {
    return (
        typeof component === 'function' && 
        String(component).includes('return React.createElement')
    ) ? true : false;
}

export function isReactComponent(component) {
    return (
        isClassComponent(component) || 
        isFunctionComponent(component)
    ) ? true : false;
}

export function isElement(element) {
    return React.isValidElement(element);
}

export function isDOMTypeElement(element) {
    return isElement(element) && typeof element.type === 'string';
}

export function isCompositeTypeElement(element) {
    return isElement(element) && typeof element.type === 'function';
}

export const async =  (loader, collection) => (
  class AsyncComponent extends React.Component {
    constructor(props) {
      super(props);

    this.Component = (<div></div>);
      this.update = this.update.bind(this)
      this.state = { component: AsyncComponent.Component };
    }

    update() {
      this.forceUpdate()
    }
    shouldComponentUpdate(_,nextState) {
      return nextState.component != this.state.component
    }
    componentWillUpdate() {
      if (!this.state.component) {
        loader().then((Component) => {
          AsyncComponent.Component = Component;

          this.setState({ component: Component });
        });
      }
    }

    render() {
      const {component : Component} = this.state
      if (this.state.Component) {
        return (
          <Component { ...this.props } { ...collection } />
        )
      }

      return null;
    }
  }
);