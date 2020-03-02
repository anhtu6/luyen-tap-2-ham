let n= prompt('input');
let array1 =n.split('');
function check(array) {

    for (let i=0;i<array.length;i++){
        if (isNaN(parseInt(array[i]))) return false;
    }
}
if (check(array1)==false) {alert('not a')}
else {alert('la so')};
