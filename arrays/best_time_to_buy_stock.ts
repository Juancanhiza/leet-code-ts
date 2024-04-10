function maxProfit(prices: number[]): number {
    let pricesMap: Map<number, number> = new Map();
    let maxProfit: number = 0;

    prices.forEach((valueOnArray, i) => {
        pricesMap.forEach((value, key, map) => {
            if(valueOnArray - key > maxProfit) {
                maxProfit = valueOnArray - key;
            }
        })

        if(!pricesMap.has(valueOnArray)) {
            pricesMap.set(valueOnArray, i);
        }

        console.log("Max profit on i =", i, "where value is =", valueOnArray ," is =", maxProfit);

    });
 
    return maxProfit;
};

let prices = [7,6,4,3,1];
console.log(maxProfit(prices));