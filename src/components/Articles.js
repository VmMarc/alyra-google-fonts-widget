import React from 'react'

const Articles = ({ text, sizePolice }) => {
  return (
    <article className="col-lg-6 mb-4">
      <div className="shadow-sm border p-3 h-100">
        <h2 className="h6 d-flex aling-items-center justify-content-between">
          <span></span>
          <small></small>
        </h2>
        <p>
          <span className="badge bg-dark"></span>
        </p>
        <p className="sample" style={{ fontSize: `${sizePolice}px` }}>
          {text}
        </p>
        <a rel="noopener noreferrer" target="_blank" className="text-danger" />
      </div>
    </article>
  )
}

export default Articles