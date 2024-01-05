
export const generateRand = (i:number, j:number):number => {
    const amount = Math.floor(Math.random() * i) + j
    return amount
  }
