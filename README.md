# English

# Tailwind Classes Generator Electron Desktop

This application is used to generate Tailwind classes from React code or specifically where **ClassName** is used, as this is the filter used by the program to extract all existing classes in your code.

For now, I have only tested it on Windows. I'm not sure if the build will work correctly on other operating systems.

# Installation Methods

There are 2 ways to use this program, one is simply by downloading the portable **.exe** and running it, which is the fastest, easiest, and simplest way.

The second way is to build the application yourself, which is also relatively simple. I'll try to be as clear as possible so you don't encounter any errors in this process.

The reason why you might want to build it yourself, I understand it might be to add functionalities, or maybe to modify the icon of the **.exe** or maybe you just want to learn, whatever the case, have fun.

## Steps to run the portable **.exe**

1. Go to the following link **[Releases](https://github.com/Code-Morth/Generador-de-clases-Tailwind-Electron/releases)**

2. Download the portable file.

3. Locate it and run it, that simple.

## Steps to build your own **.exe**

1. Navigate to the folder where you want to clone the repository.

2. Open **CMD** and type the following command:

`git clone https://github.com/Code-Morth/Generador-de-clases-Tailwind-Electron.git`

3. Once cloning is complete, close everything, open **CMD** in administrator mode (this is necessary to run the build), navigate through commands to the folder where you cloned the repository, and type the following command:

`code .`

4. Once you're in **Visual Studio Code**, open the visual terminal, and type the following command to install all dependencies, libraries, etc.

`npm i`

5. Once the installation is complete, you can run:

`npm run dev`

to see if the code executes correctly.

***If everything is going well so far, the only thing left would be to build it and generate the portable **.exe**.***

6. To build the application, execute the following command:

`npm run build`

***If the build completes successfully, now you just need to locate the folder where the program is***

7. Go to the folder where you cloned the repository, and look for the folder named **dist**, there you would find the program ready for use.


------------------------------------------------------------------------------------------

# Español

# Generador de clases Tailwind Electron Desktop

Esta aplicacion sirve para crear clases de tailwind a partir de codigo de React o en especifico en donde se use **ClasName**, ya que este es el filtro que usa el programa para extraer todas clases existentes en tu codigo.

Por ahora solo lo he probado en Windows, en otros sistemas operativos, no se si funcione correctamente el build.

# Formas de instalacion

Hay 2 formas de usar este programa, uno es simplemente descargandote el portable **.exe** y simplemente ejecutarlo, que es la forma mas rapida facil y sencilla.

La segunda forma es tu mismo buildear la aplicacion, esto tambien es relativamente sencillo, tratare de ser lo mas claro posible para que no tengas ningun error llevando a cabo este proceso.

El porque lo querrias buildear tu mismo, entiendo que seria por agregarle funcionalidades, o talvez modificar el icono del **.exe** o talvez solo quieres aprender, sea cual sea el caso, diviertete.

## Pasos para ejecutar el portable **.exe**

1. Ve al siguiente enlace **[Releases](https://github.com/Code-Morth/Generador-de-clases-Tailwind-Electron/releases)**

2. Descargas el archivo portable.

3. Lo ubicas y lo ejecutas, asi de simple.

## Pasos para buildear tu mismo tu **.exe**

1. Te ubicas en la carpeta en donde quieras clonar el repositorio.

2. Abres **CMD** escribes el siguiente comando:

`git clone https://github.com/Code-Morth/Generador-de-clases-Tailwind-Electron.git`

3. Una vez ha terminado de clonar, cierras todo, abres **CMD** en modo administrador (esto es necesario para ejecutar el build), por medio de comandos te ubicas en la carpeta en donde clonaste el repositorio, y escribes el siguiente comando : 

`code .`

4. Una ves estas en **Visual Studio Code** abres la terminal de visual, y escribes el siguiente comando para instalar todas las dependencias, librerias, etc.

`npm i`

5. Terminado la instalacion, puedes correr un:

`npm run dev`

para ver si ejecuta el codigo correctamente.

***Si hasta ahora todo va bien, lo unico que faltaria seria hacer el build y que esto genere el **.exe** portable***

6. Para buildear la aplicacion ejecutas el siguiente comando:

`npm run build`

***Si el build se completo satisfactoriamente, ahora solo quedaria ubicar la carpeta en donde esta el programa***

7. Ve a la carpeta en donde hiciste el **git clone**, y busca la carpeta con el nombre **dist**, ahi estaria el programa listo para su uso.

