//longest word in sentence
function longestWord(str){
    let wcount=0;
    let str2="";
    let lcount=0;
    let lstr="";
    for(i=0;i<str.length;i++){
        if(str[i]!=0){
            wcount++;
            str2+=str[i];
        }
        else{
            if(wcount>lcount){
                lcount=wcount;
                lstr=str2;
            }
            wcount=0;
            str2="";
        }
    }
    return lstr;
}

let str="hi hello everyone vanakam";
console.log(longestWord(str));

//longest word in sentence
str="hi hello everyone vanakam manipulation";
function longWord(str){
    let arr=str.split(" ");
    let last=0;
    let str3="";
    for(i=0;i<arr.length;i++){
        let len=arr[i].length;
        if(len>last){
            last=len;
            str3=arr[i];
        }
    }
    return str3;
}
console.log(longWord(str));

//majority element

let arr=[4,5,2,5,5,6,6,6,6,6,5];
let lcount=0;
let lele=0;
function majorityEle(arr){
    for(i=0;i<arr.length;i++){
        let count=0;
        for(j=0;j<arr.length;j++){
            if(arr[i]==arr[j]){
                count++;
            }
        }
        if(count>lcount){
            lcount=count;
            lele=arr[i];
        }
    }
    return lele;
}
console.log(majorityEle(arr));

//first non repeating character
let str5="repeatingcharacter"
function firstNonRepeat(str){
    let nonrepeat='';
    for(i=0;i<str.length;i++){
        let count=0;
        for(j=0;j<str.length;j++){
            if(str[i]==str[j])
                count++;
        }
        if(count==1){
            nonrepeat=str[i];
            break;
        }
    }
    return nonrepeat;
}
console.log(firstNonRepeat(str5));

//checking array elements
let str1=[2,5,7,9,14,16,17,21,24,28,29,32,35];
let str2=[];
for(i=0;i<str1.length;i++){
    if(str1[i]%2==0){
        str2.push(str1[i]);
    }
}
console.log(str2);

//array equality
let arr2=[4,6,1,8,7,9,5,3,2,9,7,7];
let arr3=[2,3,7,7,7,5,4,6,8,9,1,9];
if(arr2.length==arr3.length){
    let count=0;
    for(i=0;i<arr2.length;i++){
        for(j=0;j<arr3.length;j++){
            if(arr2[i]==arr3[j]){
                count++;
                break;
            }
        }
    }
    if(count==arr2.length){
        console.log("equality");
    }
    else{
        console.log("no equality");
    }
}
else{
    console.log("no equality");
}

//diference of two arrays
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const difference = array1.filter((element) => !array2.includes(element));

console.log(difference); 

//sum of elements in given array
let arr4=[2,4,5,6,7,8,9,10];
let sum=0;
for(i=0;i<arr4.length;i++){
    sum+=arr4[i];
}
console.log(sum);

//create array elements containig 1 to N
function createArray(len) {
    let newArr = [];
    for (let i = 1; i <= len; i++) {
        newArr.push(i);
    }
    return newArr;
}

let len = 15;
let arr5 = createArray(len);
console.log(arr5);

//missing values in an array from  1 to N
let arr6=[0,1,2,3,4,6,7,8,9,10,12,14,17];
let lastindex=arr6.length;
let lastele=arr6[lastindex-1];
let arr7=createArray(lastele);
let missing=[];
for(i=0;i<arr5.length;i++){
    let stat=0;
    for(j=0;j<arr6.length;j++){
        if(arr7[i]==arr6[j]){
            stat=1;
            continue;
        }
    }
    if(stat==0){
        missing.push(arr7[i]);
    }
}
console.log(missing);

// Create an array of arrays
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log(matrix);

  // Accessing elements in the array of arrays
  console.log(matrix[0][0]); // Output: 1
  console.log(matrix[1][1]); // Output: 5
  console.log(matrix[2][2]); // Output: 9
  
  // Creating an array of arrays using a loop
  const rows = 3;
  const cols = 4;
  const matrix2 = [];
  for (let i = 0; i < rows; i++) {
    matrix2[i] = [];
    for (let j = 0; j < cols; j++) {
      matrix2[i][j] = i * cols + j;
    }
  }
  
  console.log(matrix2);

  // Create an array of arrays
const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Convert array of arrays to array of objects
  const objects = matrix1.map((row) => {
    return {
      id: row[0],
      name: row[1],
      age: row[2]
    };
  });
  
  console.log(objects);

  
  // Alternatively, you can use destructuring to make the code more concise
  const objects2 = matrix1.map(([id, name, age]) => ({ id, name, age }));
  
  console.log(objects2);
