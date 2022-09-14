function getMultipliedByTwo(number) {
    return number * 2;
}

const multipliedNumber = getMultipliedByTwo(5);

console.info(multipliedNumber);



function getNumberDividedByTwo(number) {
    return number / 2;
}

const dividedByTwo = getNumberDividedByTwo(10);

console.info({ dividedByTwo });


function getTodaysSales(totalSales, totalSalesYesterday = 50) {
    const todaySales = totalSales - totalSalesYesterday;
    return todaySales;
}

console.info(getTodaysSales(150));
// console.info(getTodaysSales(150, 100)); grąžina 50, nes numatytoji reikšmė nadojama jeigu nepermeta to parametro

document.addEventListener("click", function () {
    console.info("Paspausta ant puslapio");
})