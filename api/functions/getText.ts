import fetch from 'cross-fetch';
import { Logger } from "../logger/logger";


interface HashTable {
  [key: string]: number;
}

const logger = new Logger()

export const getText = async (url:string, filter:string) => {
  let parcedText = [];
      await fetch(url)
      .then((response) => response.text())
      .then((data) => 
        {
          parcedText = textParcer(data, filter)
        }
      )
      .catch((error)=> {return null})
  return parcedText;
    }

const textParcer = (data:string, filter:string) =>{
  //O(n) time complexity. Use Regex to replace unnecessary characters from the string, leaving only letters
  const alphabet = data.replace(/[^A-Za-z'"]+/g, " ").trim()
  // O(n^2) time complexity. Make all wrords lower case and turn it into an array for array methods (sort, forEach)
  const lowerCaseArray = alphabet.toLowerCase().split(' ')
  const hash:HashTable = {};

  // O(n) time complexity
  lowerCaseArray.forEach((word: string)=>{
    hash[word] = (hash[word] + 1) || 1;
  })

  // O(n) time complexity
  let returnedWords = [];
  for (let keys in hash){
    returnedWords.push({word: keys, count: hash[keys]})
  }

  //O(n log(n)) time complexity for the .sort() method
  switch (filter) {
    case 'Ascending':
      returnedWords.sort((a, b)=>{return b.count - a.count})
      break;
    case 'Descending':
      returnedWords.sort((a, b)=>{return a.count - b.count})
        break;
    case 'Alphabetical':
          returnedWords.sort((a, b)=>{
            const textA = a.word.toUpperCase();
            const textB = b.word.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
          })
            break;
    default:
      break
  }
  
  return returnedWords;
}
