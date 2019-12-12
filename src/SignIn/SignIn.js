import { GoogleLogin } from 'react-google-login';


const SignIn = (props) => {
    return (
        <GoogleLogin buttonText="login with google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        >
        </GoogleLogin>
    )
}

export default SignIn