#Generador de clases Tailwind Electron Desktop

Esta aplicacion sirve para crear clases de tailwind a partir de codigo de React o en especifico en donde se use **ClasName**, ya que este es el filtro que usa el programa para extraer todas clases existentes en tu codigo.

#Formas de instalacion

Hay 2 formas de usar este programa, uno es simplemente descargandote el portable **.exe** y simplemente ejecutarlo, que es la forma mas rapida facil y sencilla.

La segunda forma es tu mismo buildear la aplicacion, esto tambien es relativamente sencillo, tratare de ser lo mas claro posible para que no tengas ningun error llevando a cabo este proceso.

El porque lo querrias buildear tu mismo, entiendo que seria por agregarle funcionalidades, o talvez modificar el icono del **.exe** o talvez solo quieres aprender, sea cual sea el caso, diviertete.

#Pasos para ejecutar el portable **.exe**

-Descargas el archivo portable.
-Lo ubicas y lo ejecutas, asi de simple.

#Pasos para buildear tu mismo tu **.exe**

-Te ubicas en la carpeta en donde quieras clonar el repositorio.
-Abres *CMD* escribes el siguiente comando:

`git clone https://github.com/Code-Morth/Generador-de-clases-Tailwind-Electron.git`

-Una vez ha terminado de clonar, cierras todo, abres *CMD* en modo administrador (esto es necesario para ejecutar el build), por medio de comandos te ubicas en la carpeta en donde clonaste el repositorio, y escribes el siguiente comando : 

`code .`

-Una ves esta en **Visual Studio Code** abres la terminal de visual, y escribes el siguiente comando para instalar todas las dependencias, librerias, etc.

`npm i`

-Terminado la instalacion, puedes correr un:

`npm run dev`

para ver si ejecuta el codigo correctamente.

*Si hasta ahora todo va bien, lo unico que faltaria seria hacer el build y que esto genere el **.exe** portable*

-Para buildear la aplicacion ejecutas el siguiente comando:

`npm run build`

*Si el build se completo satisfactoriamente, ahora solo quedaria ubicar la carpeta en donde esta el programa*

-Ve a la carpeta en donde hiciste el **git clone**, y busca la carpeta con el nombre **dist**, ahi estaria el programa listo para su uso.
