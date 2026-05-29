pipeline {

    agent any

    environment {
        FRONTEND_IMAGE = "zoro/frontend"
        BACKEND_IMAGE = "zoro/backend"
    }

    stages {

        stage('Clone') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/arul-1107/PORTFOLIO.git'
            }
        }

        stage('Frontend Build') {
            steps {
                dir('metallic-frontend') {
                    bat 'rmdir /s /q node_modules || exit 0'
                    bat 'npm install'
                    bat 'npm run build'
                }
            }
        }

        stage('Backend Build') {
            steps {
                dir('metallic-backend') {
                    bat 'mvn clean package -DskipTests'
                }
            }
        }

        stage('Docker Pull Base Images') {
            steps {
                bat 'docker pull node:20 || exit 0'
                bat 'docker pull nginx:alpine || exit 0'
                bat 'docker pull openjdk:21 || exit 0'
            }
        }

        stage('Docker Build Frontend') {
            steps {
                retry(3) {
                    bat 'docker build -t %FRONTEND_IMAGE% ./metallic-frontend'
                }
            }
        }

        stage('Docker Build Backend') {
            steps {
                retry(3) {
                    bat 'docker build -t %BACKEND_IMAGE% ./metallic-backend'
                }
            }
        }

        stage('Deploy') {
            steps {
                bat 'docker compose down -v'
                bat 'docker compose up -d --build'
            }
        }
    }
}
