'use client';

import { useState, useCallback } from "react";
import { Variant } from '../types';
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import classnames from "classnames";
import { Input } from "@/app/components";


const AuthForm = () => {

    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN');
        }
    }, [variant]);


    const {
        register, handleSubmit, formState: { errors }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if (variant === 'LOGIN') {
            // nextAuth Login
        }

        if (variant === 'REGISTER') {
            // axios Register
        }
    }


    const socialAction = (action: string) => {
        setIsLoading(true);


        // nextAuth Social Login
    }

    return (
        <div className={classnames('mt-8 sm:mx-auto sm:w-full sm:max-w-md')}>
            <div className={classnames('bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10')}>
                <form
                    className='space-y-6'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Input
                        id='email'
                        label='Email'
                        register={register}
                        errors={errors}
                        
                        />
                </form>
            </div>
        </div>
    )
}

export default AuthForm
