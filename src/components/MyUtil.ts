// /Users/kevinbowe/Projects/Analysis/src/my-util-code/MyUtil.ts
export default {
getNames (o) {	return Object.getOwnPropertyNames(o)},

//log     (msg:string = "", value:any = "") {console.log(`${msg}`, value)},

////	These have been renamed -- [ WAS -- info || IS -- log ]
//		They will be called like this [ con.l(~) | con.l1(~) ]
//    ------------------------------------------------------
log 	 (msg:string, value:any = "") { console.log(`%c${msg}`, "color: cyan;", value) },
log1  (msg:string, value:any = "") { console.log(`%c${msg}`, "color: red;", value) },
log2  (msg:string, value:any = "") { console.log(`%c${msg}`, "color: chartreuse;", value) },
log3  (msg:string, value:any = "") { console.log(`%c${msg}`, "color: fuchsia;", value) },
log4  (msg:string, value:any = "") { console.log(`%c${msg}`, "color: yellow;", value) },
log5  (msg:string, value:any = "") { console.log(`%c${msg}`, "color: darkorange;", value) },
log6  (msg:string, value:any = "") { console.log(`%c${msg}`, "color: pink;", value) },
log7  (msg:string, value:any = "") { console.log(`%c${msg}`, "color: mediumpurple;", value) },

enter    (msg:string, value:any = "")  { console.log(`%c>>>--> ENTER -  ${msg}`, "color: yellow;font-weight:bold;", value) },
enter0   (msg:string, value:any = "")  { console.log(`%c>>>--> ENTER -  ${msg}`, "color: green;font-weight:bold;", value) },
enter1   (msg:string, value:any = "")  { console.log(`%c>>>--> ENTER -  ${msg}`, "color: red;font-weight:bold;", value) },
enter2   (msg:string, value:any = "")  { console.log(`%c>>>--> ENTER -  ${msg}`, "color: magenta;font-weight:bold;", value) },
enter3   (msg:string, value:any = "")  { console.log(`%c>>>--> ENTER -  ${msg}`, "color: chartreuse;font-weight:bold;", value) },
enter4   (msg:string, value:any = "")  { console.log(`%c>>>--> ENTER -  ${msg}`, "color: darkorange;font-weight:bold;", value) },
enter5   (msg:string, value:any = "")  { console.log(`%c>>>--> ENTER -  ${msg}`, "color: pink;font-weight:bold;", value) },
enter6   (msg:string, value:any = "")  { console.log(`%c>>>--> ENTER -  ${msg}`, "color: mediumpurple;font-weight:bold;", value) },
enter7   (msg:string, value:any = "")  { console.log(`%c>>>--> ENTER -  ${msg}`, "color: #0D47A1;font-weight:bold;", value) },

exit    	(msg:string, value:any = "")  { console.log(`%c<--<<< EXIT -  ${msg}`, "color: green;font-weight:bold;", value) },
start    (msg:string, value:any = "")  { console.log(`%c>>>--> START -- ${msg}`, "color: yellow;", value) },
fini    	(msg:string, value:any = "")  { console.log(`%c<--<<< FINI --- ${msg}`, "color: magenta;", value) },
pause    (msg:string, value:any = "")  { console.log(`%c>>>--> PAUSE -- ${msg}`, "color: yellow;", value) },
resume   (msg:string, value:any = "")  { console.log(`%c<--<<< RESUME - $msg}`, "color: magenta;", value) },

////	Note: The %c references the CSS to the right.
//				When there are 2x %c the first %c uses the first CSS to the right. the second %c uses the second CSS to the right
bar        (msg:string = "", value:any = "")  { console.log(`%c                       ${msg}    %c ${value}`, "color: white; background-color:black;", "color:white") },
greybar    (msg:string = "", value:any = "")  { console.log(`%c                       ${msg}    %c ${value}`, "color: black; background-color:dimgrey;", "color:white") },
bluebar    (msg:string = "", value:any = "")  { console.log(`%c                       ${msg}    %c ${value}`, "color: black; background-color:lightskyblue;", "color:darkturquoise") },
redbar     (msg:string = "", value:any = "")  { console.log(`%c                       ${msg}    %c ${value}`, "color: white; background-color:red;", "color:hotpink") },
whitebar   (msg:string = "", value:any = "")  { console.log(`%c                       ${msg}    %c ${value}`, "color: black; background-color:white;", "color:white") },
greenbar   (msg:string = "", value:any = "")  { console.log(`%c                       ${msg}    %c ${value}`, "color: black; background-color:green;", "color:white") },
orangebar  (msg:string = "", value:any = "")  { console.log(`%c                       ${msg}    %c ${value}`, "color: black; background-color:orange;", "color:white") },

pass         (msg:string,      value:any = "")  { console.log(`%cPASS --  ${msg}`, "color: green;", value) },
fail         (msg:string,      value:any = "")  { console.log(`%cFAIL --  ${msg}`, "color: red;", value) },

exe     	    (msg:string,      value:any = "")  { console.log(`%c${msg}`, "color: cyan;", value) },
exe1     	 (msg:string,      value:any = "")  { console.log(`%c${msg}`, "color: red;", value) },
exe2     	 (msg:string,      value:any = "")  { console.log(`%c${msg}`, "color: chartreuse;", value) },
exe3     	 (msg:string,      value:any = "")  { console.log(`%c${msg}`, "color: fuchsia;", value) },
exe4     	 (msg:string,      value:any = "")  { console.log(`%c${msg}`, "color: yellow;", value) },
exe5     	 (msg:string,      value:any = "")  { console.log(`%c${msg}`, "color: darkorange;", value) },
exe6     	 (msg:string,      value:any = "")  { console.log(`%c${msg}`, "color: pink;", value) },
exe7     	 (msg:string,      value:any = "")  { console.log(`%c${msg}`, "color: mediumpurple;", value) }
}