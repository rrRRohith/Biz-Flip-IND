import { useState, useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm, usePage } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { captcha_validation_disable } = usePage().props;

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
        captcha: captcha_validation_disable == true ? 'DEFAULT' : '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [captchaUrl, setCaptchaUrl] = useState(route('captcha.create'));

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const refreshCaptcha = () => {
        setCaptchaUrl(`${route('captcha.create')}?${Date.now()}`);
    };

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    useEffect(() => {
        // Whenever there are errors, we refresh the CAPTCHA
        if (errors.captcha || errors.email || errors.password) {
            refreshCaptcha();
        }
    }, [errors]); // Watch for errors change

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <div className="form-group">
                    <div className="input-group mb-3">
                        <span className="input-group-text bg-transparent"><i className="ti-user"></i></span>
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="form-control ps-15 bg-transparent"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                            autoFocus
                        />
                        <InputError message={errors.email} className="mt-2 col-12" />
                    </div>
                </div>

                <div className="form-group">
                    <div className="input-group mb-3">
                        <span className="input-group-text bg-transparent"><i className="ti-lock"></i></span>
                        <TextInput
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={data.password}
                            className="form-control ps-15 bg-transparent"
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <span className="input-group-text bg-transparent">
                            <i role="button" className={`bi ${showPassword ? 'bi-eye' : 'bi-eye-slash'}`} onClick={togglePasswordVisibility}></i>
                        </span>
                        <InputError message={errors.password} className="mt-2 col-12" />
                    </div>
                </div>

                {captcha_validation_disable == false && (
                    <div className="form-group">
                        <div className="input-group mb-3">
                            <span className="input-group-text bg-transparent"><i className="ti-help-alt"></i></span>
                            <TextInput
                                id="captcha"
                                type="text"
                                name="captcha"
                                value={data.captcha}
                                className="form-control ps-15 bg-transparent"
                                placeholder="Enter CAPTCHA"
                                onChange={(e) => setData('captcha', e.target.value)}
                            />
                            <span className="input-group-text bg-transparent">
                                <img src={captchaUrl} alt="captcha" className="captcha-image" />
                            </span>
                            <span role="button" className="input-group-text bg-transparent">
                                <i onClick={refreshCaptcha} className="ti-reload"></i>
                            </span>
                            {errors.captcha && 
                                <InputError message="Invalid Captcha code" className="mt-2 col-12" />
                            }
                           
                        </div>
                    </div>
                )}

                <div className="row">
                    <div className="col-6">
                        <div className="checkbox">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                            />
                            <span className="ms-2 text-sm text-gray-600">Remember me</span>
                        </div>
                    </div>

                    <div className="col-lg-12 text-end">
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Forgot your password?
                            </Link>
                        )}
                        <div className="col-12 text-center">
                            <PrimaryButton className="btn btn-danger mt-10" disabled={processing}>
                                SIGN IN
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </form>    
      
                <div className="flex  items-center text-center mt-4">
                    <hr />
                    <h6  className='text-bold text-center mt-15'>No account yet? Get started for free!</h6>
                    <div class="mt-25">
                    <a
                        href={'/sign-up'}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >Sign Up 
                    </a>       
                        {/* <hr class="hr-text mb-4 mt-4" size="1" data-content="OR" />
                        
                        <div class="text-center">
                        <a
                        href={'/auth'}
                        className="mt-3 underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >Register for Advertiser
                    </a>
                        </div> */}
                    </div>
                   
                    <br />
                    
                </div>


        </GuestLayout>
    );
}
