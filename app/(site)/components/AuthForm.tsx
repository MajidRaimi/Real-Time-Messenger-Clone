"use client";

import { useState, useCallback, useEffect } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { If, Then } from 'react-if';
import classnames from "classnames";
import { BsGithub, BsGoogle } from 'react-icons/bs';
import axios from "axios"
import { toast } from 'react-hot-toast';
import { signIn, useSession, } from 'next-auth/react';
import { useRouter } from "next/navigation";


import { AuthSocialButton } from './';
import { Variant } from "../types";
import { Input, Button } from "@/app/components";

const AuthForm = () => {
    const session = useSession();
    const router = useRouter();
    const [variant, setVariant] = useState<Variant>("LOGIN");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if (session?.status === 'authenticated') {
            router.push('/users')
        }
    }, [session?.status, router]);



    const toggleVariant = useCallback(() => {
        if (variant === "LOGIN") {
            setVariant("REGISTER");
        } else {
            setVariant("LOGIN");
        }
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if (variant === "LOGIN") {
            signIn('credentials', {
                ...data,
                redirect: false,
            }).then((callback) => {
                if (callback?.error) {
                    toast.error('Please check your credentials')
                }

                if (callback?.ok && !callback?.error) {
                    toast.success('Logged in successfully')
                }

            }).finally(() => setIsLoading(false))
        }

        if (variant === "REGISTER") {
            axios.post('/api/register', data)
                .then(() => signIn('credentials', data))
                .catch((error) => toast.error(error.response.data.message))
                .finally(() => setIsLoading(false))
        }
    };

    const socialAction = (action: string) => {
        setIsLoading(true);

        signIn(action, {
            redirect: false,
        }).then((callback) => {
            if (callback?.error) {
                toast.error('Something went wrong')
            }
            if (callback?.ok && !callback?.error) {
                toast.success('Logged in successfully')
                router.push('/users');
            }
        }).finally(() => setIsLoading(false));

        // nextAuth Social Login
    };

    return (
        <div className={classnames("mt-8 sm:mx-auto sm:w-full sm:max-w-md")}>
            <div
                className={classnames(
                    "bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10"
                )}
            >
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

                    <If condition={variant === "REGISTER"}>
                        <Then>
                            <Input
                                id="name"
                                label="Name"
                                register={register}
                                errors={errors}
                                disabled={isLoading}
                            />

                        </Then>
                    </If>
                    <Input
                        id="email"
                        label="Email Address"
                        type="email"
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                    />
                    <Input
                        id="password"
                        label="Password"
                        type='password'
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                    />

                    <div>
                        <Button type='submit' fullWidth={true} disabled={isLoading}>
                            {variant === "LOGIN" ? "Login" : "Register"}
                        </Button>
                    </div>

                </form>

                <div className="mt-6">
                    <div className="divider">
                        Or continue with
                    </div>
                </div>

                <div className='mt-6 flex gap-2 items-center justify-around '>
                    <AuthSocialButton icon={BsGithub} onClick={() => socialAction('github')} />
                    <AuthSocialButton icon={BsGoogle} onClick={() => socialAction('googleBsGoogle')} />
                </div>

                <p className='text-center mt-6 text-sm text-primary cursor-pointer w-auto block' onClick={toggleVariant}>
                    {variant === "LOGIN" ? 'New to us?' : 'Already have an account?'}
                </p>


            </div>
        </div>
    );
};

export default AuthForm;
