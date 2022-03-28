export function printEvenNos() {
    for (let index = 1; index <= 100; index++) {
        if (index % 2 === 0) {
            console.log(index)
        }
    }
}
//function marked as the export can be assessed from another js files.