import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        // Inertia.post(route('login'));
        post(route('login'));
    };

    return (
        <GuestLayout>
           <Head title="Log in" />
             {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
          
             <form action="" method="post" onSubmit={submit}>
                <div className="form-group">
                    <div className="input-group mb-3">
                        <span className="input-group-text bg-transparent"><i className="ti-user"></i></span>
                        <TextInput 
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className=" form-control ps-15 bg-transparent"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                        autoFocus/>
                            <InputError message={errors.email} className="mt-2 col-12" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group mb-3">
                        <span className="input-group-text  bg-transparent"><i
                            className="ti-lock"></i></span>
                        <TextInput 
                         id="password"
                         type="password"
                         name="password"
                         value={data.password}
                         className=" form-control ps-15 bg-transparent"
                         autoComplete="current-password"
                         onChange={(e) => setData('password', e.target.value)}/>
                        <InputError message={errors.password} className="mt-2 col-12" />
                    </div>
                </div>
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

        </GuestLayout>
       
       
    );
}
