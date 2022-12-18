import { useState, useRef, useEffect, ReactNode } from 'react';

/**
 *
 * @param {Event} event The input event
 * @param {ReactNode} param The value of the node that needs to be iterated
 * @param {Array} array The array that will contain the iterated value of the nodes value
 * @return {Array} returns an array of string values
 */
export const onKeyPress = (event, param, array) => {
  if (event.key === 'Enter') {
    (param as [])?.forEach((event: React.ReactElement) => {
      array.push(event.props.label);
    });
  }
};

/**
 *
 * @param {ReactNode} param The value of the node that needs to be iterated
 * @param {Array} array The array that will contain the iterated value of the nodes value
 * @return {Array} returns an array of string values
 */
export const onBlur = (param: ReactNode, array: string[]) =>
  (param as [])?.forEach((event: React.ReactElement) => {
    array.push(event.props.label);
  });

/**
 *
 * @param {String} firstValue The first character of the string will be add to det id
 * @param {String} secondValue The first character of the string will be add to det id
 * @return {String} returns a string value with 4 digits and the first character of firstValue and secondValue
 */
export const setEmployeeId = (firstValue: string, secondValue: string) =>
  Math.floor(1000 + Math.random() * 9000) +
  firstValue.charAt(0).toUpperCase() +
  secondValue.charAt(0).toUpperCase();

/**
 *
 * @param {String} key The key to set in localStorage for this value
 * @param {Object} defaultValue The value to use if it is not already in localStorage
 * @param {{serialize: Function, deserialize: Function}} options The serialize and deserialize functions to use (defaults to JSON.stringify and JSON.parse respectively)
 */
export const useLocalStorageState = (
  key,
  defaultValue,
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) => {
  const [state, setState] = useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage);
    }
    return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
  });

  const prevKeyRef = useRef(key);

  useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
};
