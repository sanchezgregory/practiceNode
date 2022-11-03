const calculate = (x, y) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let sum = x + y;
            if (sum > 5) {
                res('Good:' + (x+y));

            } else {
                rej('Wrong!' + (x+y));
            }
        }, 2000)

    });
}

module.exports = {
    calculate
}