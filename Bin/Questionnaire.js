import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = ({ history }) => {
   const [registrationData, setRegistrationData] = useState({});
   const handleBlur = (e) => {
      const newRegistrationData = { ...registrationData };
      newRegistrationData[e.target.name] = e.target.value;
      setRegistrationData(newRegistrationData);
   };
   
    
   const submitHandler = (e) => {
      e.preventDefault();
      history.push("/");
   };

   
   const [show,setShow] = useState(false)
   return (

      
      <div className="authincation h-100 p-meddle">
         <div className="container h-500">
            <div className="row justify-content-center h-400 align-items-center">
               <div className="col-md-6">
                  <div className="authincation-content">
                     <div className="row no-gutters">
                        <div className="col-xl-13">
                           <div className="auth-form">
                              <h4 className="text-center mb-4">
                                 Primary Care Physical Questionnaire
                              </h4>
                              <form
                                 action=""
                                 onSubmit={(e) => submitHandler(e)}
                              >
                                 <div className="form-group">
                                    <label className="mb-1">
                                       
                                    </label >
                                    <label >
                                       <h10>Preferred name</h10>
                                    </label >
                                  
                                    <input
                                       type="text"
                                       className="form-control"
                                       placeholder="Preferred name "
                                       name="PreferredName"
                                       onChange={handleBlur}
                                    />
                                 </div>

                                 <div className="form-group">
                                    <label className="mb-1">
                                       <strong>What is the best your phonenumber number to reach you during the day?</strong>
                                    </label>
                                    <input
                                       type="tel"
                                       className="form-control"
                                       name="Phone"
                                       placeholder="Phone number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"  
                                       
                                       onChange={handleBlur}
                                    />
                                    <small>Format: 123-452-6789</small>
                                 </div>
                                 <div className="form-group">
                                    <label className="mb-1">
                                       <strong>May we leave a brief message</strong>
                                    </label>

                                    <select
                                       id="message"
                                       className="form-control"
                                       
                                       name="LeaveMessge"
                                       onChange={handleBlur} >

                                       <option value="">Choose a option </option>
                                       <option value="Yes">Yes</option>
                                       <option value="No">No</option>
                                       
                                       
                                    </select>
                                 </div>


<h3>
   Are you <b>currently</b> experiencing any of the following symtoms? ( Please pick up answer yes or no for symtoms , Or <b>Unknow</b>)
</h3>
                                 <div className="form-group">
                                    <label className="mb-1">
                                      
                                    </label>

                                    <select
                                       id="GeneralSysmptoms"
                                       className="form-control"
                                       
                                       name="General"
                                       onChange={handleBlur} required>

                                       <option value="">Choose a option </option>
                                       <option value="GeneralSysmptoms">General Sysmptoms</option>
                                       <option value="Eyes">Eyes</option>
                                       <option value="Eyesnose">Eyes, nose, mouth and throat</option>
                                       <option value="Breasts">Breasts</option>
                                       <option value="LungsHeart">Lungs and Heart</option>
                                       <option value="Abdomen">Abdomen</option>
                                       <option value="Genitourinary">Genitourinary</option>
                                       
                                    </select>
                                 </div>

                                 <h5><b>General Sysmptoms</b> - Fever, unxplained weight loss, extreme tiredness, unexplained weight gain, 
                                          swollen nodes, exessive thirst, cold or heat intolerance , unusual bleedin</h5>                                      
                                       <h5><b>Eyes</b> - Unexplained vision loss, double vision , eye pain </h5>                     
                                       <h5><b>Eyes, nose, mouth and throat</b> -Sore throat, runny nose , ear pain</h5>
                                       <h5><b>Breasts</b> - Lumps , nipple discharge, skin changes </h5>
                                       <h5><b>Lungs and Heart</b> - Chest pain, palpitations, cough, wheezing, breathing, difficulties </h5>                                
                                       <h5><b>Abdomen</b> - Nausea, vomiting, pain, constipation, diarrhea, bloody stools, change in bowel habits</h5>                           
                                       <h5><b>Genitourinary</b> - Pain with urination, blood in urine, leaking urine, frequent trips to the bathroom</h5>
                                 
                                




                                       <div className="form-group">
                                    <label className="mb-1">
                                    <strong>Choose your gender:</strong>
                                    </label>

                                    <select
                                       id="GeneralSysmptoms"
                                       className="form-control"
                                       
                                       name="General"
                                       onChange={handleBlur} required>

                                       <option value="">Choose a option </option>
                                       <option value="Male">Male</option>
                                       <option value="Female">Female</option>
                                    
                                       
                                    </select>
                                 </div>
                               <h5>  If you are <b>Female</b> please answer Part A and B</h5>

                                 <div className="form-group">
                                    <label className="mb-1">
                                    <strong> A) Are you still having perioeds </strong>
                                    </label>

                                    <select
                                       id="GeneralSysmptoms"
                                       className="form-control"
                                       
                                       name="General"
                                       onChange={handleBlur} required>

                                       <option value="">Choose a option </option>
                                       <option value="Yes">Yes</option>
                                       <option value="No">No</option>
                                    
                                       
                                    </select>
                                 </div>
                                 
                                 <div className="form-group">
                                 <label >
                                    <strong> B) How old were you when you have  had your first period ? </strong>
                                    <input
                                       type="number"
                                       className="form-control"
                                       defaultValue="FIrstperiod"
                                       name="firstPeriod" min="9" max="20"  
                                       onChange={handleBlur}
                                       required/>
                                    </label>
                                   
                           
                                 </div>

                                 <h5>  If you are <b>Male</b> please answer Part C and D</h5>






                                 <div className="form-group">
                                    <label className="mb-1">
                                    <strong> C) Are you difficulty getting /maintaining erections. feeling like bladder won't empty </strong>
                                    </label>

                                    <select
                                       id="GeneralSysmptoms"
                                       className="form-control"
                                       
                                       name="General"
                                       onChange={handleBlur} required>

                                       <option value="">Choose a option </option>
                                       <option value="YES">Yes</option>
                                       <option value="No">No</option>
                                    
                                       
                                    </select>
                                 </div>
                                 
                                 <div className="form-group">
                                 <label >
                                    <strong> D)When was the first time you ejaculated ? </strong>
                                    <input
                                       type="number"
                                       className="form-control"
                                       defaultValue="ejaculated"
                                       name="ejaculated" min="9" max="20"  
                                       onChange={handleBlur}
                                       required/>
                                    </label>
                                   
                           
                                 </div>


                                 <div className="form-group">
                                    <label className="mb-1">
                                       
                                    </label >
                                    <label >
                                       <h10><b>Other</b>-List any other symptons not mentioned above:</h10>
                                    </label >
                                  
                                    <input
                                       type="text"
                                       className="form-control"
                                       placeholder="Other symptons "
                                       name="Other"
                                       onChange={handleBlur}
                                    />
                                 </div>
                                 






                               
                                

                                 <div className="text-center mt-4">
                                    <input
                                       type="submit"
                                       value=" Submit information"
                                       className="btn btn-primary btn-block"
                                    />
                                 </div>
                              </form>
                        
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

function App(){}


export default Register;
