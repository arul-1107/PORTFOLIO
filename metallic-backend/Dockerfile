# ---------- BUILD STAGE ----------
FROM maven:3.9.6-eclipse-temurin-21 AS build

WORKDIR /app

# copy pom first (better caching)
COPY pom.xml .
COPY src ./src

# build spring boot fat jar
RUN mvn clean package -DskipTests

# ---------- RUNTIME STAGE ----------
FROM eclipse-temurin:21-jdk

WORKDIR /app

# copy generated jar (explicit naming is safer)
COPY --from=build /app/target/*.jar app.jar

# expose backend port (match spring boot port)
EXPOSE 8080

# run app
ENTRYPOINT ["java", "-jar", "app.jar"]
