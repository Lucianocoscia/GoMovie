import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='background-signup'>

        <div className='form-container'>

            <div className="login-box">
                <p>Contact Us</p>
                <form >
                    <div className="user-box">
                        <input required="" name="" type="text" placeholder="Name"/>
                    </div>
                    <div className="user-box">
                        <input required="" name="" type="email" placeholder="Email"/>
                    </div>
                    <div className="user-box">
                        <textarea required="" name="" type="email" placeholder="Message"/>
                    </div>
                    <a>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                    </a>
                </form>
                {/* <p>Don't have an account? <a to={'/register'} className="a2">Sign up!</a></p> */}
            </div>
        </div>
    </div>
        </>
  )
}

export default Contact