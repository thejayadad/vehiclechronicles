import React from 'react'
import SignIn from './signin-btn'

const AuthModal = () => {
  return (
    <>
    {/* The button to open modal */}
<label htmlFor="my_modal_6" className="btn">SignIn With Google</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    <h3 className="text-lg font-bold">VehicleChronicle</h3>
    <p className="py-4">Your clicks away from gaining access! SignIn Below</p>
    <SignIn />
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn btn-error text-white">X</label>
    </div>
  </div>
</div>
    </>
  )
}

export default AuthModal