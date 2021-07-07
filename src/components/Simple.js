
import React, { Fragment, useState, useCallback } from 'react';

import useKeyboardShortcut from '../utils/use-hotkey';

const Simple = () => {
    console.log('loaded Simple component')
    const [foo, setFoo] = useState('foo');
    const handleInput = e => {
        setFoo(e.target.value)
    }
    const keys = ['Control', 'Shift','F']; 
    const handleKeyboardShortcut = useCallback(() => {
        console.log('detected keyboard shortcut')
        setFoo(current => current+'o')
      }, [setFoo])
    useKeyboardShortcut(keys, handleKeyboardShortcut, { overrideSystem: true }) 
    return (
        <Fragment>
          <div>{foo}</div>
          <label htmlFor="box">type here:</label>
          <input type="input" onChange={handleInput}/>
        </Fragment>

    )
}
export default Simple;