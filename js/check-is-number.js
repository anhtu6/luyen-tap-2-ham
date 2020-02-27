console.log(typeof parseInt('h'));

let n = prompt('Nhap ki tu vao');
function checkNumber(a) {
    if (isNaN(parseInt(a) )) {
        alert('khong la so');
        return false;
    } else {
        alert('la so');
        return true;
    }
}
checkNumber(n);