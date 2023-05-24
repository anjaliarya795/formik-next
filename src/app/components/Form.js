"use client";
import {useFormik} from "formik";
import Input from './input/Input';
import  { signUpSchema } from "./../schemas";
// import TelInput from "./input/tel_input";

const initialValues = {
    name: "",
    email: "",
    password: "",
    repeat_password: "",
}


const Registration = () => {


    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
          values
        );
        action.resetForm();
      },
    });
  console.log(
    "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
    errors
    
  );

    return (
        <section className='w-8/12 md:w-6/12 mx-auto py-20 my-56 h-full self-stretch '>
            
            <form className='p-10 rounded-md shadow-lg shadow-gray-900' onSubmit={handleSubmit}> 

                <div className="relative z-0 mb-6 group">
                    <Input LabelName={"Enter Full Name:"} id={"name"} type={"text"} value={values.name} onChange={handleChange} onBlur={handleBlur} />
                    
                    {errors.name && touched.name ? (
                        <p className="form-error">{errors.name}</p>
                      ) : null}

                </div>
                <div className="relative z-0 mb-6 group">
                    <Input LabelName={"Enter Email:"} id={"email"} type={"email"} value={values.email} onChange={handleChange} onBlur={handleBlur} />
                    
                    {errors.email && touched.email ? (
                        <p className="form-error">{errors.email}</p>
                      ) : null}

                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <Input LabelName={"Enter Password:"} id={"password"} type={"password"} value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                    
                    {errors.password && touched.password ? (
                        <p className="form-error">{errors.password}</p>
                      ) : null}

                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <Input LabelName={"Repeat Password:"} id={"rep_password"} type={"password"} value={values.repeat_password} onChange={handleChange} onBlur={handleBlur}/>
                    
                    {errors.repeat_password && touched.repeat_password ? (
                        <p className="form-error">{errors.repeat_password}</p>
                      ) : null}

                </div>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </section>

    );
}

export default Registration;
