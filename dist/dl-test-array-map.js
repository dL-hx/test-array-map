"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
// 统一泛型
const arrayMap = (array, callback) => {
    let i = -1;
    const len = array.length;
    const resArray = [];
    while (++i < len) {
        resArray.push(callback(array[i], i, array));
    }
    return resArray;
};
exports.default = arrayMap;
