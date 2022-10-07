import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function HooksCakeContainer() {
  const numOfCakes = useSelector(state => state.numOfCakes)
  const dispatch = useDispatch( )
  return (
    <div>
        <h2>num of cakes - {numOfCakes}</h2>
        <button >Buy cake</button>
    </div>
  )
}

export default HooksCakeContainer