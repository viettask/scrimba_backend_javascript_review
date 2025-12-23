export function getStockData()
{
    return {
        symbol: "QtechAI",
        sym: 'QTA',
        //return a random number between 0 and 3 to 2 decimal places
        price: (Math.random() * 3).toFixed(2),
        //return a timestamp in this format: hh/mm/ss
        time: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    }
}