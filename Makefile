OS := $(shell uname)

# Variables
GRADLE=gradle-4.2/bin/gradle
NPM=node-v6.11.3-linux-x64/bin/npm
JAVA=java

#::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
get_java:
ifeq ($(OS),Linux)
	sudo add-apt-repository ppa:webupd8team/java
	sudo apt-get update
	sudo apt-get install oracle-java8-installer
endif

#::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
get_postgres:
ifeq ($(OS),Linux)
	sudo apt-get update
	sudo apt-get install postgresql postgresql-contrib
endif

#::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
get_gradle:
ifeq ($(OS),Linux)
	wget -c https://services.gradle.org/distributions/gradle-4.2-bin.zip
	unzip gradle-4.2-bin.zip
endif

#::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
get_tools:
ifeq ($(OS),Linux)
	sudo apt-get install wget unzip
endif

get_node:
ifeq ($(OS),Linux)
	wget -c https://nodejs.org/dist/v6.11.3/node-v6.11.3-linux-x64.tar.xz
	tar -xf node-v6.11.3-linux-x64.tar.xz
endif

#::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
dependencies:
	$(MAKE) get_tools
	$(MAKE) get_postgres
	$(MAKE) get_java
	$(MAKE) get_gradle
	$(MAKE) get_node

#::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
install:
	$(MAKE) dependencies

#::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
run:
	$(NPM) install
	$(GRADLE) clean
	$(GRADLE) build -x test
	$(JAVA) -jar -Dspring.profiles.active=dev build/libs/javaplenofeliperodrigues-0.0.1-SNAPSHOT.jar & $(NPM) run dev

