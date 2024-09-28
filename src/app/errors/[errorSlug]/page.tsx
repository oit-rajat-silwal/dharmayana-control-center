import React from 'react'

const Error = ({ params: { customerSlug } }: { params: { customerSlug: string } }) => {
  return (
    <div>{customerSlug}</div>
  )
}

export default Error