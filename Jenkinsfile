pipeline {
    agent any

    environment {
        DOCKER_REGISTRY = 'localhost:5000'
        DOCKER_IMAGE = 'invictus-pgw-merchant-fe-master'
        DOCKER_TAG = 'latest'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', 
                    url: 'https://github.com/tsega19/JenkinsTest.git'
            }
        }
        
        stage('Install NPM Modules') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Build Project') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}", ".")
                }
            }
        }
        
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry("http://${DOCKER_REGISTRY}", '') {
                        docker.image("${DOCKER_IMAGE}:${DOCKER_TAG}").push()
                    }
                }
            }
        }
        
        stage('Run Docker Container') {
            steps {
                script {
                    sh "docker run -d -p 8080:80 ${DOCKER_REGISTRY}/${DOCKER_IMAGE}:${DOCKER_TAG}"
                }
            }
        }
    }
}
