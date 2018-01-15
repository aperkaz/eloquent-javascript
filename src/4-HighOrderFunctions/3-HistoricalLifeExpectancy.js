/*
Average of people in the ancestry file. Group the results
by century.
 */
import ancestors from './ancestors';

export const personsCentury = person => (
  Math.ceil(person.died / 100)
);

export const groupBy = (array, catFunction) => {
  const groups = {};
  array.forEach((element) => {
    const catergory = catFunction(element);
    if (catergory in groups) {
      groups[catergory].push(element);
    } else {
      groups[catergory] = [element];
    }
  });
  return groups;
};

const groupedByCentury = groupBy(ancestors, personsCentury);

export const agesByCentury = (array) => {
  const groupsOfAges = {};
  // eslint-disable-next-line
  for(const century in array){
    groupsOfAges[century] = groupedByCentury[century].map(person => (
      person.died - person.born
    ));
  }

  return groupsOfAges;
};

export const ages = agesByCentury(groupedByCentury);

