/* eslint-disable */

/*
Compute the average age difference between mother-child
in the data set.
User average function (in prev-section of book)
Data from array & data set differs. Check if exits.
*/

import ancestors from './ancestors';

export const average = array => {
  const plus = (a,b) => ( a + b );
  return array.reduce(plus) / array.length;
};

let byName = {};
ancestors.forEach(person => (
  byName[person.name] = person
));

const motherChildAgeDiff = () => {
  let ageDiffArray = [];

  ancestors.forEach(children => {
      let mother = byName[children.mother];
      if(mother){
        ageDiffArray.push(children.born - mother.born);
      }
    });

  return average(ageDiffArray);
};

export default motherChildAgeDiff;

