import React from 'react';
import { TransitionGroup, Transition } from 'react-transition-group';

function stateStyle(state, timeout, animation) {
  return {
    transition: `opacity ${getTimeout(state, timeout)}ms ${animation}`,
    opacity: (state === 'entered')? 1 : 0.01
  }
}
function getTimeout(state, timeout) {
  switch(state) {
    case 'entering':
    case 'entered':
      return timeout.enter || timeout
    case 'exited':
    case 'exiting':
    default:
      return timeout.exit || timeout
  }
}

const Fader = ({ children, timeout=200, animation='ease-in-out', ...props }) => (
  <TransitionGroup {...props}>
    {React.Children.map(children, (child) => {
      if (!child) return null;
      return (
        <Transition timeout={timeout}>
          {state => React.cloneElement(child, {
            style: stateStyle(state, timeout, animation)
          })}
        </Transition>
      )
    })}
  </TransitionGroup>
)
export default Fader;
