pipeline {

    agent any

    environment {
        FRONTEND_IMAGE = "zoro/frontend"
        BACKEND_IMAGE = "zoro/backend"
    }

    stages {

        stage('Clone') {
            steps {
                git(
                    branch: 'main',
                    url: 'https://github.com/arul-1107/PORTFOLIO.git'
                )
            }
        }

        stage('Frontend Build') {
            steps {
                dir('metallic-frontend') {
                    bat 'npm install'
                    bat 'npm run build'
                }
            }
        }

        stage('Backend Build') {
            steps {
                dir('metallic-backend') {
                    bat 'mvn clean package'
                }
            }
        }

        stage('Docker Build Frontend') {
            steps {
                bat 'docker build -t %FRONTEND_IMAGE% ./metallic-frontend'
            }
        }

        stage('Docker Build Backend') {
            steps {
                bat 'docker build -t %BACKEND_IMAGE% ./metallic-backend'
            }
        }

        stage('Deploy') {
            steps {
                bat 'docker compose down'
                bat 'docker compose up -d --build'
            }
        }
    }
}


