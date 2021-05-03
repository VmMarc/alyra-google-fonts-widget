import React from 'react'
import Articles from './Articles'

const Display = ({ viewPolice, text, sizePolice }) => {
  return (
    <div class="col-lg-9">
      <section class="row mb-5">
        <h2 class="mb-3">
          <span class="badge bg-danger" style={{ color: 'white' }}>Les plus récentes</span>
        </h2>
        <Articles text={text} sizePolice={sizePolice} />
      </section>
    </div >
  )
}

export default Display