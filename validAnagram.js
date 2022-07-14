/* Technique to find solution: Frequency Counter problem
Problem to find Anagaram

Examples: validAnagram('','')  //true
validAnagram('aaz','zza') //false
validAnagram('anagram','nagaram') //true
*/

function validAnagram(first, second){
    if(first.length !== second.length){
        return false;
    }
    let obj = {};
    for(let val of first){
        //If the letter doesn't exist increment 1 and also for if exits too.
        obj[val] ? obj[val] +=1 : obj[val]=1;
    }
    for(let val of second){
        // If the associated value 0 or not found it is not Anagram.
        if(!obj[val]){
            return false;
        }
        else{
            obj[val] -= 1;
        }
    }
    return true;
}


validAnagram('anagram','nagaram')
