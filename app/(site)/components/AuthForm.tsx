"use client";

import { useState, useCallback } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { If, Then } from 'react-if';
import classnames from "classnames";
import { BsGithub, BsGoogle } from 'react-icons/bs';

import { AuthSocialButton } from './';
import { Variant } from "../types";
import { Input, Button } from "@/app/components";


const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>("LOGIN");
    const [isLoading, setIsLoading] = useState<boolean>(false);

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
            // nextAuth Login
        }

        if (variant === "REGISTER") {
            // axios Register
        }
    };

    const socialAction = (action: string) => {
        setIsLoading(true);

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

                <div className='text-center mt-6 text-sm text-sky-500 cursor-pointer' onClick={toggleVariant}>
                    {variant === "LOGIN" ? 'New to us?' : 'Already have an account?'}
                </div>


            </div>
        </div>
    );
};

export default AuthForm;
