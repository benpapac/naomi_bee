

const ARR = [1,2,3,4,5];

const slide = (arr, idx) => {
    let newArray;
    let midpoint = Math.floor(arr.length/2);
        let distance = idx - midpoint;
    if (idx < midpoint) {
           newArray = arr
               .slice(distance)
               .concat(arr.slice(0, idx + 1))
               .concat(arr.slice(idx + 1, distance));
    } else {
           //what if the idx is arr.length-1?
           //what if the idx is > midpoint?
           newArray = arr
               .slice(0 + distance, idx + 1)
               .concat(arr.slice(idx + 1))
               .concat(arr.slice(0, distance));
    }

    return newArray;
}

 console.log(slide(ARR, 3));
 console.log(slide(ARR, 2));
 console.log(slide(ARR, 2));
 console.log(slide(ARR, 4));
 console.log(slide(ARR, 1));
 console.log(slide(ARR, 1));