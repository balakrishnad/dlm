import React from 'react'
import { Card } from 'react-bootstrap'

const Layout = (props) => {
  const {
    centered = true,
    width = 18,
    height = 'auto',
    customStyle = {},
  } = props

  return (
    <>
      <Card className={centered ? 'text-center' : ''} style={{ ...customStyle, width: `${width}rem`, height: isNaN(height) ? 'auto' : `${height}rem` }}>
        <Card.Body>
          {props.children}
        </Card.Body>
      </Card>
    </>
  )
}

export default Layout
