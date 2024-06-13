//Part 1 - design a recursive function designed to fail via stackoverflow and log the iterations.

try {
    let counter = 0;
    function toFailure() {
        counter++;
        console.log(counter);
        toFailure();
    }

    toFailure();
}
catch (err) {
    console.log(err);
}