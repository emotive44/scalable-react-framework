import React, { useState } from 'react';


interface IState {
  [key: string]: any,
}

const useForm = (initState: IState, defauldActiveRadio?: string, radioBtns?: Object) => {
  const [state, setState] = useState(initState);
  const [activeRadio, setActiveRadio] = useState(defauldActiveRadio);

  const radioBtnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    
    setState(prev => ({
      ...prev,
      ...radioBtns,
      [name]: checked,
    }));

    setActiveRadio(name);
  }

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setState(prev => ({
        ...prev,
        [name] : value,
    }));
  }

  const checkBoxChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    setState(prev => ({
      ...prev,
      [name]: checked,
    }));
  }

  const phoneChangeHandler = (e?: React.ChangeEvent<HTMLInputElement>, prefix?: string, phoneName?: string) => {
    if(e && e.target) {
      const { value, name } = e.target;

      // forbid user delete a prefix
      if(value.length < prefix?.length!) {
        setState(prev => ({
          ...prev,
          [name]: prefix,
        }));

        return;
      }

      // const regex = new RegExp(`^[${prefix}]+[0-9]{${prefix?.length! + 8}}`);
      // if(!regex.test(value)) {
      //   setErr('please enter a valid number')
      // }

      setState(prev => ({
        ...prev,
        [name] : value,
      }));

    } else {
      setState(prev => ({
        ...prev,
        [phoneName!] : prefix,
      }));
    }
  }

  const dateChangeHandler = (date: string, name: string) => {
    setState(prev => ({
      ...prev,
      [name]: date,
    }))
  }

  const selectChangeHandler = (value: any, name: string, multi?: false, remove?: false) => {
    // reset values for multiselect
    if(multi && value === '') {
      setState(prev => ({
        ...prev,
        [name]: [],
      }));
      return;
    } else if(value === '') {
      setState(prev => ({
        ...prev,
        [name]: '',
      }));
    }

    // remove selected values from multi select
    if(multi && remove) {
      if(typeof value !== 'object'){
        setState((prev:any) => ({
          ...prev,
          [name]: prev[name].filter((selected: string) => selected !== value),
        }));
      } else {
        setState((prev:any) => ({
          ...prev,
          [name]: prev[name].filter((selected: {id: string}) => selected.id !== value.id),
        }));
      }
      return;
    }

    if(!multi) {
      setState(prev => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setState((prev:any) => ({
        ...prev,
        [name]: [...prev[name], value],
      }));
    }
  }

  return { 
    state,
    activeRadio,
    setState, 
    dateChangeHandler, 
    inputChangeHandler, 
    phoneChangeHandler, 
    selectChangeHandler,
    checkBoxChangeHandler, 
    radioBtnChangeHandler,
  }
}

export default useForm;
