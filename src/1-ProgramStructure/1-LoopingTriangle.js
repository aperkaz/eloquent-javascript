 const printTriangle = (rows) => {
   let charactersInLine;
   for (charactersInLine = 1; charactersInLine <= rows; charactersInLine += 1) {
     let line = '';
     let characterCount = 0;
     while (characterCount < charactersInLine) {
       line += '#';
       characterCount += 1;
     }
     console.log(line);
   }
   return true;
 };

 export default printTriangle;
