rem nvm use 12.18.4

set TARGET_FOLDER=.\build
set ARCH=os.linux.x86_64
set NODE_OPTIONS=--max_old_space_size=6144
SET PYTHON=D:\Python27\python.exe

rmdir /s /q %TARGET_FOLDER%

call %USERPROFILE%\AppData\Local\.meteor\meteor.bat build --verbose --directory %TARGET_FOLDER% --architecture %ARCH%

cd %TARGET_FOLDER%\bundle\programs\server

call npm install

cd ..\..\..\..