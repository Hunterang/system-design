
//冒泡改进记录最后一次交换的位置，如果不交换则位置变为0，终止循环

let sort = (arr) => {

  let len = arr.length-1

  while (len > 0) {
    let pos = 0 //每次执行循环一次记录最后交换的位置，所以位置重置，如果不交换则将位置变为
    for (var i = 0; i < len; i++) {
      if (arr[i] > arr[i+1]) {
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
        pos = i
      }
      len = pos
    }

  }
}
