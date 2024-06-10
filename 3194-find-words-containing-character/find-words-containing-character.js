/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */


let findWordsContaining = function(words, x) {

    const result = [];

    // for (let i = 0; i < words.length; i++){
    //     let word = words[i];

    //     if (word.includes(x)){
    //         result.push(i);
    //     }

    // }

    words.forEach((word, idx) => {
      if (word.includes(x)) result.push(idx);
    })

    return result;
};