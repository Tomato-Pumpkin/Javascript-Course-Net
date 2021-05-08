/*soal nomor 1;
menyatukan string dan array dengan ditambahkan kata penghubung
*/

let watches = ["Swiss Army", "Dublot", "Alba"];

function viewWatches(arloji){
    let temp = "Saya punya ";
    for(let i = 0; i < arloji.length; i++){
        if (i === arloji.length - 1){
            temp += "dan " +arloji[i] + ".";
        }else {
            temp += arloji[i] + ", ";
        }
    }
    return temp;
}
console.log("Jawaban nomor 1");
console.log(viewWatches(watches));

console.log("===================================================");

/*soal nomor 2;
membuat string menjadi array
*/

let pantun = "makan nasi bayar pake paku"

function toArray(string){
    let result = [];
    let temp = "";

    for (let i = 0; i < string.length; i++){
        if (string[i] !== " "){
            if (temp === ""){
                temp += string[i].toUpperCase();
            }else {
                temp += string[i];
            }
        } else {
            result.push(temp);
            temp = "";
        }
        if (i === string.length - 1){
            result.push(temp);
            temp = "";
        }
    }
    return result;
}
console.log("Jawaban nomor 2");
console.log(toArray(pantun));

console.log("===================================================");
/*soal nomor 3
mengurutkan array berdasarkan alphabet
*/
let fruitName = ["blueberry", "apple", "orange", "anggur", "banana", "pineapple"];

fruitName.sort((a, b) => {
    if (a < b)
    return -1;
    if (a > b)
    return 1;

    return fruit;
})
console.log("Jawaban nomor 3");
console.log(fruitName);

console.log("===================================================");
/*soal nomor 4
menghitung determinan matrix 
*/

let matrix = [
    [1,2],
    [3,4]
]

function determinanMatrix(matrix){
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]
}
console.log("Jawaban nomor 4");
console.log(determinanMatrix(matrix));

console.log("===================================================");

