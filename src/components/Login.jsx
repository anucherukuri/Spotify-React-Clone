import React from 'react';


const Login = () => {
    return(
        <Container>
            <div className="container">
    <div className="row head"><img src="./assets/Spotify_Logo_RGB_Black.png" width="200px" height="auto"/></div>

  </div>

  <hr>

  <div className="container mt-4">
    <div className="row social-button facebook">
      <div className="col-4"></div>
      <div className="col-4"><button type="button" id="face-btn" className="btn rounded-pill btn-sm btn-block"><svg
            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook mr-3"
            viewBox="0 0 16 16">
            <path
              d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
          </svg>
          <p>CONTINUE WITH FACEBOOK</p>
        </button></div>
      <div className="col-4"></div>
    </div>

    <div className="row social-button apple">
      <div className="col-4"></div>
      <div className="col-4"><button type="button" id="apple-btn" className="btn rounded-pill btn-sm btn-block"><i
            className="fa fa-apple mr-3" style="font-size:19px"></i>
          <p>CONTINUE WITH APPLE</p>
        </button></div>
      <div className="col-4"></div>
    </div>

    <div className="row social-button google">
      <div className="col-4"></div>
      <div className="col-4"><button type="button" id="grey-btn" className="btn rounded-pill btn-sm btn-block">
        <img src="./assets/Google__G__Logo.svg.png" width="16px" height="16px" className="mr-3"/>
          <p>CONTINUE WITH GOOGLE</p>
        </button></div>
      <div className="col-4"></div>
    </div>



    <div className="row mt-2">
      <div className="col-4"></div>
      <div className="col-4">
        <div className="row">
          <div className="col-5">
            <hr/>
          </div>
          <div className="col-2 mt-2">
            <p id="or-line">OR</p>
          </div>
          <div className="col-5">
            <hr/>
          </div>
        </div>
      </div>
      <div className="col-4"></div>
    </div>

    <div className="row">
      <div className="col-4"></div>
      <div className="col-4">
        <form action="./index.html" method="GET">
          <div className="form-group">
            <label for="usernaem">Email address or username</label>
            <input type="email" className="form-control" placeholder="Email address or username" name="username"
              id="usernaem" aria-describedby="emailHelp"/>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" placeholder="Password" id="exampleInputPassword1"/>
            <p id="emailHelp" className="form-text text-muted mt-3 font-weight-bold"><u>Forgot your
                password?</u></p>
          </div>
      </div>
      <div className="col-4"></div>
    </div>

    <div className="row">
      <div className="col-4"></div>
      <div className="col-4">
        <div className="row remember-login">
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1">
            <label className="form-check-label font-weight-normal" for="exampleCheck1">
              <p style="color: dimgray;">Remember me</p>
            </label>
            <a href="./home-page.html"><button className="btn btn-login rounded-pill"><a href="./home-page.html" className="text-white">LOG IN</a></button></a>
          </div>
        </div>
      </div>
      </form>
      <div className="col-4"></div>
    </div>

    <div className="row line-after-login-btn">
      <div className="col col-4"></div>
      <div className="col col-4">
        <hr/>
      </div>
      <div className="col col-4"></div>
    </div>

    <div className="row" style="margin-bottom: -10px;">
      <div className="col-4"></div>
      <div className="col-4">
        <p style="font-weight: bolder; text-align: center;">Don't have an account?</p>
      </div>
      <div className="col-4"></div>
    </div>

    <div className="row social-button google">
      <div className="col-4"></div>
      <div className="col-4"><button type="button" id="grey-btn" className="btn rounded-pill btn-sm btn-block mb-3">
          <p style="font-size: small; font-weight: bold; letter-spacing: 2px;">SIGN UP FOR SPOTIFY</p>
        </button></div>
      <div className="col-4"></div>
    </div>

  </div>

  <div className="container">
    <div className="row col-12">
      <div className="col col-4"></div>
      <div className="col col-4">
        <hr>
      </div>
      <div className="col col-4"></div>
    </div>
  </div>

  <div className="container mt-2">
    <div className="row col-12">
      <div className="col col-4"></div>
      <div className="col col-4">
        <p style="text-align: center; font-size: 11px;">If you click "Log in with Facebook" and are not a
          Spotify user, you will be registered and you agree to Spotify's <a href="url">Terms & Conditions</a>
          and <a href="url">Privacy Policy</a>.</p>
      </div>
      <div className="col col-4"></div>
    </div>
  </div>
</Container>
    )
}