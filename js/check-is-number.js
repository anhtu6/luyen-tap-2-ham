let string= prompt('input');
let array1 =string.split('');
function check(array) {

    for (let i=0;i<array.length;i++){
        if (isNaN(parseInt(array[i]))) return false;
    }
}
if (check(array1)==false) {alert('not a number')}
else {alert('is a number')};
