import React from 'react'
import Script from 'next/script'
function FaceBookComment() {
  return (
<div className='w-full justify-center'>
<Script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0" nonce="59y5aGx9"/>


<div className="fb-comments  " data-href="http://localhost:3000/post" data-width="100%" data-numposts="10"></div>
</div>


  )
}

export default FaceBookComment