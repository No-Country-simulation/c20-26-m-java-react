# Usa una imagen base de Maven para compilar el proyecto
FROM maven:3.9.4-openjdk-17 AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo pom.xml y el directorio src al contenedor
COPY pom.xml .
COPY src ./src

# Construye el proyecto con Maven
RUN mvn clean package -DskipTests

# Usa una imagen base de OpenJDK para ejecutar la aplicación
FROM openjdk:17-jdk-slim

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo JAR desde la etapa de construcción al contenedor
COPY --from=build /app/target/pet-0.0.1-SNAPSHOT.jar app.jar

# Expone el puerto que utiliza la aplicación
EXPOSE 8080

# Define el comando para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "app.jar"]
