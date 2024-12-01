// Santa Claus 🎅 ha recibido una lista de números mágicos que representan regalos 🎁,
// pero algunos de ellos están duplicados y deben ser eliminados para evitar confusiones.
// Además, los regalos deben ser ordenados en orden ascendente antes de entregárselos a los elfos.

// Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados)
//  y devuelva una nueva lista sin duplicados, ordenada en orden ascendente.

function prepareGifts(gifts: number[]): number[] {
  const noRepeat = (gifts: number[]): number[] => {
    let giftsNoRepeat: number[] = [];
    for (let i = 0; i < gifts.length; i++) {
      if (!giftsNoRepeat.includes(gifts[i])) giftsNoRepeat.push(gifts[i]);
    }
    return giftsNoRepeat;
  };

  const quickSort = (list: number[]): number[] => {
    if (list.length <= 1) {
      return list;
    }
    let pivot = list[0];

    let left: number[] = [];
    let right: number[] = [];

    for (let i = 1; i < list.length; i++) {
      list[i] < pivot ? left.push(list[i]) : right.push(list[i]);
    }

    return quickSort(left).concat(pivot, quickSort(right));
  };

  const giftsNoRepeat = noRepeat(gifts);

  return quickSort(giftsNoRepeat);
}

const gifts1 = [4, 10, 4, 20, 33, 5, 5, 5];
const preparedGifts1 = prepareGifts(gifts1);
console.log(preparedGifts1);
