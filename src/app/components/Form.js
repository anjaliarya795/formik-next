"use client";
import {useFormik} from "formik";
import Input from './input/Input';
import TelInput from "./input/tel_input";

const initialValues = {
    email: "",
    password: "",
    repeat_password: "",
    first_name: "",
    last_name: "",
    phone: "",
    company: "",

}


const Form = () => {


    const Formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            console.log(values); 
        }
    });

    console.log(Formik)


    return (
        <section className='w-8/12 md:w-6/12 mx-auto py-20 my-56 h-full self-stretch '>
            
            <form className='p-10 rounded-md shadow-lg shadow-gray-900'> 
                <div className="relative z-0 mb-6 group">
                    <Input label={"Enter Email:"} id={"email"} type={"email"} help_text={"a@gmail.com"} />
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <Input label={"Enter Password:"} id={"password"} type={"password"} />

                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <Input label={"Repeat Password:"} id={"rep_password"} type={"password"} />

                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <Input label={"Enter First Name:"} id={"first_name"} type={"text"} help_text={"Anjali"} />

                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                    <Input label={"Enter Last Name:"} id={"last_name"} type={"text"} help_text={"Arya"} />

                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <TelInput/>

                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <Input label={"Enter Company Name:"} id={"company"} type={"text"} help_text={"Ex. Google"} />

                    </div>
                </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </section>

    );
}

export default Form;
