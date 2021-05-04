import React from 'react'
import Articles from './Articles'

const Display = ({ viewPolice, policeList, text, sizePolice }) => {
  return (
    <div class="col-lg-9">
      <section class="row mb-5">
        <h2 class="mb-3">
          <span class="badge bg-danger" style={{ color: 'white' }}>Les plus récentes</span>
        </h2>

        {policeList.slice(0, 10).map((elem) => {
          return (
            <Articles key={elem.family}
              text={text}
              sizePolice={sizePolice}
              policeFamily={elem.family}
              policeVariant={elem.variants.length}
              policeCategory={elem.category} />
          )
        }
        )}
      </section>
    </div >
  )
}

export default Display