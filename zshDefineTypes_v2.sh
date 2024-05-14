#!/usr/bin/env zsh

### PATH /Users/kevinbowe/Projects/Analysis/Vue3-SAM-EB-Analysis-v8/
### FILE zshDefineTypes_v2.sh
###########################################################

# This version will build a SINGLE tsc command.
# The command will hold All of the files defined in the 'miscFiles', 'componentFiles' and 'parts' Arrays.

###--------------------------
### Set Local vars
local rootPath="src"
local tscParm="--declaration --emitDeclarationOnly"
###--------------------------
###	This files must contain the FULL PATH
miscFiles=( 
	src/composables/MyCompUtil.ts 
	src/router/index.ts 
	src/stores/users.ts
)
###--------------------------
###	This files will have the component path applied automatically
componentFiles=( 
	MyConsoleUtil.ts 
	MyUtil.ts 
)
###--------------------------
###	Each line defines a path and file name.
###	There must be one or more spaces in between the two.
###	This 'component' portion of the path is hard coded below.
partFiles=()

#echo "\nBuilding Component Part Type Definitions (d.ts)"
#echo   "-----------------------------------------------"
echo "\n  Component Part Type Definitions (d.ts)"
echo   "  --------------------------------------"
local partFilesOut
count=${#partFiles[@]}
for ((i = 1; i < count; i+= 2)); do
	# echo "Path = ${parts[i]}"
	# echo "File = ${parts[i+1]}"
	echo "      Processing: ${partFiles[i+1]}"
	partFilesOut="${partFilesOut} ${rootPath}/components/${partFiles[i]}${partFiles[i+1]}"
done 

###--------------------------
### Process the Component files
#echo "\n  Building Component Type Definitions (d.ts)"
#echo   "  -------------------------------------------"
echo "\n  Component Type Definitions (d.ts)"
echo   "  ---------------------------------"
local componentFilesOut
for file in ${componentFiles[@]}
do
	echo "      Processing: ${file}"
	componentFilesOut="${componentFilesOut} '${rootPath}/components/${file}'"
done

###--------------------------
### Process the Loose files

#echo "\n  Building Misc Type Definitions (d.ts)"
#echo   "  -------------------------------------"
echo "\n  Misc Type Definitions (d.ts)"
echo   "  ----------------------------"
local miscFilesOut
for file in ${miscFiles[@]}
do
	echo "      Processing: ${file}"
	miscFilesOut="${miscFilesOut} ${file}"
done

#echo "\n  Executing the Command"
#echo   "  ---------------------"
eval "tsc ${tscParm} ${miscFilesOut} ${componentFilesOut} ${partFilesOut}"

#echo "\n"
echo "      -----------------------------------------------"
echo "        [ TS2307 (4x) | TS1343 (1x) | TS2339 (1x) ]"
echo "          These errors are safe to Ignore. (KB)"
echo "      -----------------------------------------------"
#echo "\n"

###########################################################