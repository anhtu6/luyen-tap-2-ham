function checkCharacter(array,x) {
    let length = array.length;
    let count =0;
    for (i=0;i<length;i++) {
        if (array[i]==x) {
            count+=1;
        }
    }
    if (count==0) {
        return -1;
    } else {
        document.write('ki tu xuat hien '+count+' lan');
    }
}

checkCharacter(['a','h','j','l','h'],'h');