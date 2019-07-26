# Simple CRUD App  #

Simple CRUD app

### Tools ###

* IntelliJ
* Git
* Gradle 4.2
* Node 6.11.3
* GnuMake
* SpringBoot
* React
* Redux
* React Router

### Enviroment ###

* Ubuntu 17.04

### Build and Installation ###

* In command line execute 

1) Clone this repository

        git clone https://rodrigues882013@bitbucket.org/rodrigues882013/javaplenofeliperodrigues.git
 
2) For build project (backend and frontend) downloading all dependencies (include java, postgres, gradle, node, npm, wget and unzip). **If you have all of dependencies installed, go forward to step 6**:
            
        make install

3) For run project in development mode just type on shell:

        make run
        
4) Accessing http//:localhost:3000/register and fill the form for obtained access for app.

5) After the step 4, you'll redirect to login page, fill with your username and password registered and test it.

6) (Optional) You can execute the build step-by-step, follow this instructions, remember that you must have all build
 tools installed in your system. **_Make sure that you have a postgres installed with user postgres and one database with name postgres too._**


        gradle build -x test
        java -jar -jar -Dspring.profiles.active=dev build/libs/javaplenofeliperodrigues-0.0.1-SNAPSHOT.jar

 After the step above, the backend is running on your local machine, the api is secure and you can't make call for her directly without have a token (I used jwt over http protocol) given by auth system or registered by application. In other shell execute the frontend build
    
        npm install
        npm run dev


### To do ###

Unit tests for backend and frontend
