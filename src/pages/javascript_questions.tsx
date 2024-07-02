import React, { useEffect } from 'react'

function Javascript() {
  const letters = "Hello World";
  const letterCounts:any = {};
  const data = [3, 1, 5, 2, 4, 1, 3, 5, 4, 9]
  
  const findOccurence = (letters:string) =>{
    let strTOArray = letters.split('');
    const counts = strTOArray.reduce((acc:any, char) => {               // Use reduce to count occurrences
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});
    console.log('With Reduce', counts)

  }

  const findOccurenceForEach = (letters:string) =>{
    const characters = letters.split('');
    characters.forEach(char => {
          letterCounts[char.toUpperCase()] = (letterCounts[char.toUpperCase()] || 0) + 1;
        }
    );
    console.log('For Loop', letterCounts)
  }
// Convert the string to an array of characters



  useEffect(() =>{
    findOccurence(letters);
    findOccurenceForEach(letters);
   let value =  new Set(data);
   console.log(value)
  },[])
  return (
    <div>
      <h2>Number of Ocuurence Each letter</h2>
      
    </div>
  )
}

export default Javascript
