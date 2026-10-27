"use client"
import Styles from "./Video.module.css";
import {useState } from 'react';

export const Video = (props) => {
  const clas = props.clas;
  const [control, setControl] = useState('')
  return (
    <>
      <video className={Styles[clas]} src={props.path} poster={props.poster} controls={control} onMouseEnter={() => setControl('controls')}  onMouseLeave={() => setControl('')}></video>
    </>
  );
};
