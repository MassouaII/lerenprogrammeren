//let x = 0;
for (let i= 0; i<=99; i++) {
    if (i < 99) {
        if (i <= 9) {
            i = "0" + i
        }

        document.write(i + ", ");
    } else {
        document.write(i);
    }
}
