export default function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    bubbleSort(array, animations);
    return animations;
  }
  
  function bubbleSort(array, animations = []) {
    var length = array.length;
  
    for (var i = 0; i < length; i++) {
      for (var j = 0; j < length - i - 1; j++) {
        animations.push([j, j + 1]);
        if (array[j] > array[j + 1]) {
          var tmp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = tmp;
          animations.push([j, j + 1, array[j], array[j + 1]]);
        } else animations.push([j, j + 1, array[j], array[j + 1]]);
        animations.push([j, j + 1]);
      }
    }
    return array;
  }
  