import React, { useContext } from 'react'
import { Global } from './GlobalProvider'

const ComD = () => {
    const date = useContext(Global)
  return (
    <>
        <h1> We are reading {date.name } {date.address}<br/>javascript </h1>
    </>
  )
}

export default ComD