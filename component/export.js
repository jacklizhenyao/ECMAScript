/**
 * Created by jack on 2019/2/27.
 */
//1、单独的export 加在变量，方法前  export let fruit =“apple”
export let friut = "apple";

export function log(text) {
    console.log('test log ----')
}

//2、在结尾添加export

export{friut, log}//可以是类，其他成员


//3。重命名导出的东西

export{friut, log as testLog}

testLog("nihao");

//4。默认导出的东西
export {friut as  default}

export default function output() {


}