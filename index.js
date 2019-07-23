function pyramid(lines) {
    let gapsleft = [];
    let gapsright = [];
    for (let z = 0; z <= lines - 1; z++) {
        gapsleft.push(" ");
        gapsright.push(" ");
    }
    let firstLine = gapsleft.join("").concat("x", gapsright.join(""));
    console.log(firstLine);
    for (let i = 1; i < lines; i++) {
        gapsleft.splice(-i, 1, "x");
        gapsright.splice(i - 1, 1, "x");
        let line = gapsleft.concat("x", gapsright);
        console.log(line.join(""));
    }
}
function revPyramid(lines) {
    let gapsleft = [];
    let gapsright = [];
    for (let z = 0; z <= lines - 1; z++) {
        gapsleft.push("x");
        gapsright.push("x");
    }
    let firstLine = gapsleft.join("").concat("x", gapsright.join(""));
    console.log(firstLine);
    for (let i = 0; i < lines; i++) {
        gapsleft.splice(i, 1, " ");
        gapsright.splice(-i - 1, 1, " ");
        let line = gapsleft.concat("x", gapsright);
        console.log(line.join(""));
    }
}
pyramid(40);
revPyramid(40);
pyramid(20);
revPyramid(20);
