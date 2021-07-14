// const animalArray =['dog','cat','pig'];
// animalArray.push('cow');

// const personObj = {
//     name: 'Patrena',
//     age: 99
// n};
// personObj.age =100;
// personObj.occupation = 'Developer'; 
// console.log(personObj);
// console.log(animalArray);

const profileDataArgs = process.argv.slice(2);

const printProfileData = profileDataArr => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log('================');

  // Is the same as this...
  profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);
