'use strict';
/* global cuid */
const Item = (function(){ //eslint-disable-line no-unused-vars

  const validateName = function(name) {
    if (name === '') {
      throw new TypeError('Name does not exist');
    }
  };

  const Create = function(name) {
    return {
      id: cuid(),
      name,
      checked: false
    };
  };

  return {
    validateName,
    Create,
  };

}());
