const AlgoDetails = (idx) => {
    const ob1 = {
        "title" : "Bubble Sort",
        "description" : `Bubble Sort is a simple sorting algorithm that repeatedly steps through the list,
        compares adjacent elements and swaps them if they are in the wrong order.The pass through the list
        is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the
        way smaller or larger elements "bubble" to the top of the list. Although the algorithm is simple,
        it is too slow and impractical for most problems`,
        "worstCase" : "O(n2)",
        "avgCase" : "O(n2)",
        "bestCase" : "O(n)",
        "space" : "O(n2)"
    };
    const ob2 = {
        "title" : "Merge Sort",
        "description" : `Merge Sort is an efficient, stable sorting algorith that makes use of the divide and conquer strategy. Conceptually the algorithm works as follows:

        Divide the unsorted list into n sublists, each containing one element(a list of one element is considered sorted)
        Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.`,
        "worstCase" : "O(nlogn)",
        "avgCase" : "O(nlogn)",
        "bestCase" : "O(nlogn)",
        "space" : "O(n)"
    };

    switch (idx) {
        case 1: return ob1; 
        case 2: return ob2;
        case 3: return ob1;
        default: break;
    }
    
}

export default AlgoDetails;
