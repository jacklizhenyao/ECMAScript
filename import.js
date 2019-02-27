"use strict";

//1、导入指定模块成员 import 指定方法，变量，类等成员
//import {fruit,log} from './component/export';


//2、导入所有模块成员 import *
import * as exportModuleObject from './component/export';

console.log(log('nihoa'));

//3。重命名导入的东西
import {fruit,log as testLog} from './component/export';
console.log(testLog('nihoa'));

//4、默认导入import后面不需要加{} 需在导出的模块中指定那些是默认的
import output from './component/export';
console.log(output());