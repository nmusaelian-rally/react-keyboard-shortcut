
import React, { useState, useCallback } from 'react';

import useKeyboardShortcut from '../utils/use-hotkey';

const Simple = () => {
    const [foo, setFoo] = useState('foo');
    //const keys = ['control','shift','f']; 
    const keys = ['Meta','f']; 
    //'Control', 'CONTROL', 'control' work; 'ctrl', 'CTRL' does not 
    const handleKeyboardShortcut = useCallback(() => {
        console.log('detected keyboard shortcut')
        setFoo(current => current+'o')
      }, [setFoo])
    useKeyboardShortcut(keys, handleKeyboardShortcut, { overrideSystem: true })
    return (
        <div>{foo}</div>
    )
}
export default Simple;