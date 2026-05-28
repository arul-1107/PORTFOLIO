pipeline {

    agent any

    environment {
        FRONTEND_IMAGE = "zoro/frontend"
        BACKEND_IMAGE = "zoro/backend"
    }

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/arul-1107/PORTFOLIO'
            }
        }

        stage('Frontend Build') {
            steps {
                dir('metallic-frontend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Backend Build') {
            steps {
                dir('metallic-backend') {
                    sh 'mvn clean package'
                }
            }
        }

        stage('Docker Build Frontend') {
            steps {
                sh 'docker build -t $FRONTEND_IMAGE ./metallic-frontend'
            }
        }

        stage('Docker Build Backend') {
            steps {
                sh 'docker build -t $BACKEND_IMAGE ./metallic-backend'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker compose down'
                sh 'docker compose up -d --build'
            }
        }
    }
}
