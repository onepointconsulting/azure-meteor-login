set TARGET_FOLDER=../build
call %USERPROFILE%/AppData/Local/.meteor/meteor.bat build --verbose --directory %TARGET_FOLDER%

set MONGO_URL=mongodb://127.0.0.1:27017/simple_todos_react
set ROOT_URL=http://localhost:4000
set PORT=4000

cd %TARGET_FOLDER%\bundle\programs\server

call npm install

cd ..\..

