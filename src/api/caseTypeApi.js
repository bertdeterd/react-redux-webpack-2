"use strict";
import fetch from 'isomorphic-fetch';

class CaseTypeApi {

  static getAllCaseTypes() {
    return fetch(`https://private-0b6735-casetypes.apiary-mock.com/caseTypes`)
     .then(
       response => response.json()
      );
  }
}

export default CaseTypeApi;