import React from 'react'
import './Page.css'

function Page() {
  return (
    <div className="page" >
        <div className="page-container" >
        
        <div class="col-md-5 offset-md-1 mb-3">
        <form>
          <h1 className="title" >Subscribe to our newsletter</h1>
          <p className="text" >Monthly digest of what's new and exciting from us.</p>
          <br/>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
          <button type="button" class="btn btn-primary btn-lg">Get Started</button>
          </div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Page