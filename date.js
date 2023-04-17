const Data = new Date();
const Data2 = new Date(2022, 0, 1);
const Data3  = Data - Data2;

console.log(Data2.getFullYear());
console.log(Data2.getMonth());
console.log(Data2.getDate());
console.log(Data2.getDay());
console.log(Data2.getHours());
console.log(Data2.getUTCHours());
console.log(Data2.toString());
console.log(Data2.toUTCString());
console.log(Data2.toLocaleDateString());
console.log(Data2.toLocaleTimeString());
console.log(Data2.toISOString());
