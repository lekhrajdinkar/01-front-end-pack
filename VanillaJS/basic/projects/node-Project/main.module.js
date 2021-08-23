import {f2, f1 as first_function} from './feature.module' //import named export
import di from './feature.module' // import deafult
import * as all from './feature.module' // import all

first_function();
f2();
di();
all.function_3();

// commonJs Come for NodeJs, before Es6 modules
// syntax:

// inport {a} = require('')
// export.ab = var1
// export = { ab: var1}





