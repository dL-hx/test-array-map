// const arrayMap = (array: any[], callback:(item:any, index:number, array: any[])=> any):any[]=>{
//     let i = -1
//     const len = array.length
//     const resArray = []
//     while (++i < len) {
//         resArray.push(callback(array[i], i, array))
//     }
//     return resArray
// }
// export default arrayMap

// 统一泛型

const arrayMap = <T, U>(array: T[], callback: (item: T, index: number, arry: ReadonlyArray<T>) => U): U[] => {
    let i = -1;
    const len = array.length;
    const resArray = [];
    while (++i < len) {
      resArray.push(callback(array[i], i, array));
    }
    return resArray;
  }
  
export default arrayMap