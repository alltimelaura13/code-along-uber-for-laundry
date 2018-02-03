## Uber For Laundry
> **Ejemplo**: https://uber-for-laundry.herokuapp.com

### 1 - Estructura del proyecto
- [ ] **Clonar el repo**:  https://github.com/ironhack-labs/code-along-uber-for-laundry
- [ ] **Cambiar estructura a MVC**:
	- [x ] Separar rutas y controladores
	- [ x] Añadir terminaciones _.model_, _.controller_, _.routes_
	- [ x] Añadir nodemon
	- [x ] Añadir **script dev** `"dev": "DEBUG=starter-code:* nodemon bin/www"`
	- [ x] Ejecutar `npm run dev` y todo OK.

### 2 - Registro
- [ ] **Dependencias**:
	- [x] mongoose
	- [x] bcrypt
- [ ] **Configración de MongoDB**:
	- [x ] Fichero `db.config.js`
	- [x] Añadirlo al `app.js`
- [ ] **Rutas y Controlador**:
    - [ x] `auth.routes.js` & `auth.controller.js`
    - [ x] `GET /signup` => `module.exports.signup`
    - [ x] `POST /signup` => `module.exports.doSignup`
    	- [ ] Validaciones de moongoose:
    		- [ X] Nombre (requerido)
    		- [X ] Email (requerido, email y único)
    		- [x ] Password (requerido, >5)
            - [ x] Mostrar errores en la vista
       	- [ x] Mongoose pre-save con hashing de contraseña (bcrypt)
       	- [ ] Método checkPassword
       	- [ ] Rellenar la vista en caso de error con los datos anteriores.
- [ ] **Mirar desde la consola de mongo que el usuario se ha creado bien**

### 3 - Login
- [ ] **Dependencias**:
	- [ ] express-session
	- [ ] passport
	- [ ] passport-local
	- [ ] connect-mongo
	- [ ] connect-flash
- [ ] **Configuración**:
    - [ ] express-session & connect-mongo
	- [ ] passport & passport-local
- [ ] **Rutas y Controlador**:
	- [ ] `auth.routes.js` & `auth.controller.js`
	- [ ] `GET /login` => `module.exports.login`
	- [ ] `POST /login` => `module.exports.doLogin`
		- [ ] Validaciones email & password no vacíos
		- [ ] Rellenar la vista en caso de error con los datos anteriores (email).
		- [ ] Middleware secure (isAuthenticated, nonAuthenticated); proteger rutas
		- [ ] Añadir middleware para tener en la vista siempre el usuario que logado (app.js antes de las rutas): `res.locals.session = req.user || {};`
		- [ ] Mostrar el email del usuario en el index `Welcome to Uber for Laundry <strong>(user@ironhack.com).</strong>`
		- [ ] Mostrar solo las rutas del index necesarias en función de si el usuario está conectado o no.
- [ ] **Fash**:
	- [ ] Configurar (app.js): 
	``` 
    const flash = requiere('connect-flash');
    app.use(flash());
    
	```
    - [ ] Usar: `req.flash('welcome', 'Welcome back ${email}')` 
	- [ ] Cuando el usuario inicia sesión mostrar un mensaje en el index que diga `Welcome back user@ironhack.com`

### 3 - Logout
- [ ] **Rutas y Controlador**:
	- [ ] `auth.routes.js` & `auth.controller.js`
	- [ ] `GET /logout` => `module.exports.logout`

### 3 - Hacerse lavandero:
- [ ] **Rutas y Controlador**:
	- [ ] `laundry.routes.js` & `laundry.controller.js`
	- [ ] `GET /dashboard` => `module.exports.dashboard`
	- [ ] `POST /launderers` => `module.exports.doLaunder`
		- [ ] Validacion de **fee**, no puede ser vacío y > 0
   	- [ ] En el dashboard, mostrar sólo el formulario si no eres lavandero, si lo eres indicarlo y mostrar el fee.
   	```
		 <h3> You are a launderer </h3>
         <p>Your laundering fee is <strong>$<%= session.fee %>.</strong></p>
	```

### 4 - Buscar lavandero:
- [ ] **Rutas y Controlador**:
	- [ ] `laundry.routes.js` & `laundry.controller.js`
	- [ ] `GET /launderers` => `module.exports.launders`

### 5 - Concertar cita:
- [ ] **Rutas y Controlador**:
	- [ ] `laundry.routes.js` & `laundry.controller.js`
	- [ ] `GET /launderers/:id` => `module.exports.profile`
	- [ ] `GET /launderers/:id/schedule-pickup` => `module.exports.schedulePickup`: Ojo!! he cambiado la ruta, hay que modificar la vista que viene ya hecha!!
		- [ ] Validacion de **date**, no puede ser vacío y > hoy 
	- [ ] Mostrar en el `/dashboard` la lista de citas del usuario o lavandero que está conectado

### 6 - Deploy heroku:
- [ ] deploy npm script: `"deploy": "cd .. && git subtree push --prefix starter-code heroku master && cd starter-code"`


Add CommentCollapse 



Message webptmad1017