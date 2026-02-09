import { Form, Formik } from 'formik';
import { UserService } from '../services/userService'
import CustomTextInput from '../utils/customFormItems/CustomTextInput';
import { ToastContainer, toast } from 'react-toastify';

export default function RegisterModal() {

    const userService = new UserService();

    const registerCustomer = (values) => {

        if (values.password === values.passwordAgain) {

            let customer = {
                customerName: values.customerName,
                email: values.email,
                phone: values.phone,
                password: values.password
            };

            userService.addCustomer(customer).then(result => {
                if(result.status == 200) {
                    document.querySelector("#loginModalLink").click();
                    toast("Your account has been created successfully. Please sign in.", {
                        theme:"colored",
                        position:"top-center"
                    })
                }
            })
        } else {
            toast.error("Failed to create account.", {
                theme: "colored",
                position: "top-center"
            });
        }
    }

  return (
    <div>
        <div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header login-modal-header">
                    <h5 class="modal-title" id="registerModalLabel">Sign Up</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <Formik 
                    initialValues={{}}
                    onSubmit={(values) => {
                        registerCustomer(values);
                    }}>
                    <Form>
                        <div class="modal-body">
                            <div class="form-floating mb-3">
                                <CustomTextInput type="text" name="customerName" className="form-control" id="customerName" placeholder='First Name – Last Name' required/>
                                <label for="customerName">First Name – Last Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <CustomTextInput type="email" name="email" className="form-control" id="email" placeholder='Email' required />
                                <label for="email">Email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <CustomTextInput type="tel" name="phone" className="form-control" id="phone" placeholder='Phone' pattern="[0]{1} [0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}" required />
                                <label for="phone">Phone – 0 5 *** **</label>
                            </div>
                            <div className="form-floating mb-3">
                                <CustomTextInput type="password" name="password" className="form-control" id="password" placeholder='Password' required/>
                                <label for="password">Password</label>
                            </div>
                            <div className="form-floating mb-3">
                                <CustomTextInput type="password" name="passwordAgain" className="form-control" id="passwordAgain" placeholder='Confirm Password' required/>
                                <label for="passwordAgain">Confirm Password</label>
                            </div>
                            <p className='ps-2 text-start'>
                                Already a member?
                                <a href='!#' id="loginModalLink" style={{color:"black"}}
                                data-bs-toggle="modal" data-bs-target="#loginModal"> Log In Now </a>
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary login-modal-btn">Sign Up</button>
                        </div>
                    </Form>
                </Formik>
                </div>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}
