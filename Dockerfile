# Use OpenJDK image
FROM openjdk:17-jdk-slim

# Set the working directory
WORKDIR /app

# Copy your Maven/Gradle project files
COPY . .

# Package the application (you can skip this if you're building outside Docker)
RUN ./mvnw clean package -DskipTests

# Run the jar file (adjust target jar name if needed)
CMD ["java", "-jar", "target/your-app-name.jar"]
