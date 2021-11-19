import React, { useState, useEffect , state} from "react";
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';

const Login = ({ history }) => {
   const [loginData, setLoginData] = useState({});
   const [email, setEmail] = useState('');
   const [loginStatus, setLoginStatus] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();

   const handleEmailChange = (e) => {
      console.log('Typed = ${e.target.value}');
      setEmail(e.target.value);
    };
    const handlePassChange = (e) => {
      console.log('Typed = ${e.target.value}');
      setPassword(e.target.value);
    };

   const SubmitLogin = (e) => {
      e.preventDefault();
      console.log("submitting login"); 
      Axios.post('http://localhost:5000/api/signin', {
        email: email,
        password: password
      })
        .then((response) => {
          if (response.data.message) {
            setLoginStatus('Invalid Email Or Password');
            console.log('response.data.message');
            navigate('/react/doctors', { replace: true });
          }
          if (!response.data.message) {
            setLoginStatus('Login Succesfull');
            sessionStorage.setItem('email', email);
            sessionStorage.setItem('user', response.data.message);
            navigate('/react/doctors', { replace: true });
          }
        })
        .catch((err) => {
          setLoginStatus('Invalid Email Or Password');
        });
    };

    useEffect(() => {
      Axios.get('http://localhost:5000/api/signin').then((response) => {
        if (response.data.loggedIn == true) {
          navigate('/react/doctors', { replace: true });
        }
      });
    }, []);

   

   return (
      <div className="authincation h-100 p-meddle">
         <div className="container h-100">
            <div className="row justify-content-center h-100 align-items-center">
               <div className="col-md-6">
                  <div className="authincation-content">
                     <div className="row no-gutters">
                        <div className="col-xl-12">
                           <div className="auth-form">
                              <h4 className="text-center mb-4">
                                 Sign in your account
                              </h4>
                              <form
                                 action=""
                                 onSubmit={(e) => SubmitLogin(e)}
                              >
                                 <div className="form-group">
                                 <h2 className="error">{loginStatus} </h2>
                                    <label className="mb-1">
                                       <strong>Email</strong>
                                    </label>
                                    <input
                                       type="email"
                                       className="form-control"
                                       defaultValue="hello@example.com"
                                       name="email"
                                       onChange={handleEmailChange}
                                    />
                                 </div>
                                 <div className="form-group">
                                    <label className="mb-1">
                                       <strong>Password</strong>
                                    </label>
                                    <input
                                       type="password"
                                       className="form-control"
                                       defaultValue="Password"
                                       name="password"
                                       onChange={handlePassChange}
                                    />
                                 </div>
                                 <div className="form-row d-flex justify-content-between mt-4 mb-2">
                                    <div className="form-group">
                                       <div className="custom-control custom-checkbox ml-1">
                                          <input
                                             type="checkbox"
                                             className="custom-control-input"
                                             id="basic_checkbox_1"
                                          />
                                          <label
                                             className="custom-control-label"
                                             htmlFor="basic_checkbox_1"
                                          >
                                             Remember my preference
                                          </label>
                                       </div>
                                    </div>
                                    <div className="form-group">
                                       <Link to="/page-forgot-password">
                                          Forgot Password?
                                       </Link>
                                    </div>
                                 </div>
                                 <div className="text-center">
                                    <input
                                       type="submit"
                                       value="Sign Me In"
                                       className="btn btn-primary btn-block"
                                       onClick={SubmitLogin}
                                    />
                                 </div>
                              </form>
                              <div className="new-account mt-3">
                                 <p>
                                    Don't have an account?{" "}
                                    <Link
                                       className="text-primary"
                                       to="/page-register"
                                    >
                                       Sign up
                                    </Link>
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
