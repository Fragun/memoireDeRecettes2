import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import styles from '../register/Register.module.scss';
import UserContext from '../../context/context';
import { signin } from "../../apis/auth";

export default function Login() {

  const validationSchema = Yup.object().shape({
    email: Yup
      .string()
      .email('Invalid email')
      .required('Required'),
    password: Yup
      .string()
      .required('Required'),
  });




  const {


    handleSubmit,


    register,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm({
    initialValues,
    resolver: yupResolver(validationSchema),
  });

  

  const submit = handleSubmit(async (values) => {
    try {
        clearErrors();
        const user = await signin(values);
    } catch (message) {
        setError("generic", {type: "generic", message})
    }
  });

  return (

    <div className=" d-flex justify-content-center">
      <div className={`${styles.rectangle} m30`}>
        <h1 className="text-align-center">Connexion</h1>
        <form onSubmit={handleSubmit(submit)} className="d-flex flex-column justify-content-center align-items-center p20">

          <div className="d-flex flex-column">
            <label htmlFor="email" className='mb10 pl20'>Email:</label>
            <input type="email" className="form-control" name="email" {...register('email')} />
            {errors?.email && <p className='form-error'>{errors.email.message}</p>}
          </div>

          <div className="d-flex flex-column mt10 mb20">
            <label htmlFor="password" className="mb10 pl20">Mot de passe :</label>
            <input type="password" name="password" {...register('password')} />
            {errors.password && (
            <p className="form-error">{errors.password.message}</p>
          )}
          </div>
          {errors.generic && (
            <p className="form-error">{errors.generic.message}</p>
        )}
          <div className="">
            <button type="Se connecter" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    
  );
};
