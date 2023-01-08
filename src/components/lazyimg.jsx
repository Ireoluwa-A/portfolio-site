import React, {useState, useEffect, useRef} from 'react'
import {useInView} from 'react-intersection-observer';

import Spinner from './spinner.jsx';
import "../styles/photography.css";
import placeholder from '../assets/spinner.png'

// Learned from: 
// https://huzaima.io/blog/lazy-loading-react-components-intersection-observer
const LazyImg = (props) => {
  const imgInfo = props.imgInfo
  const [ placeholderRef, inView ] = useInView({
        triggerOnce: true,
    fallbackInView: true,
  });

  return (
    <div ref={placeholderRef} > {inView ? <img  src={imgInfo.imgSrc} alt={imgInfo.alt || ""} /> : <Spinner />}</div>
    // <div ref={placeholderRef} > {inView ? <img  src={imgInfo.imgSrc} alt={imgInfo.alt || ""} /> : <img  src={placeholder}  alt={props.alt || ""} />}</div>
  )
  };
export default LazyImg

