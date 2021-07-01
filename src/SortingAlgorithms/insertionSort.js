export default function getInsertionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    insertionSort(array, animations);
    return animations;
  }
  
  function insertionSort(array, animations = []) {
    var length = array.length;
    for (var i = 0; i < length-1; i++) {
        animations.push([i, -10]);
        var mn = i;
      for (var j = i+1; j < length; j++) {
        if (array[mn] > array[j]) {
          mn = j;
          animations.push([mn, -1]);
        }
      }
      var tmp = array[mn];
        array[mn] = array[i];
        array[i] = tmp;
        animations.push([i, mn, array[i], array[mn]]);
        // console.log((animations[animations.length-1]).length);
        animations.push([i, mn, -1]);
    }
    return array;
  }