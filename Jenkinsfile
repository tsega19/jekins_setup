pipeline {
    agent any

    environment {
        LOCAL_REGISTRY = 'localhost:5000'
        DOCKER_IMAGE = "${LOCAL_REGISTRY}/react-app"
        GIT_REPO = 'https://github.com/tsega19/jekins_setup.git'
        BRANCH = 'main'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: "${BRANCH}", url: "${GIT_REPO}"
            }
        }

        stage('Build React App') {
            steps {
                script {
                    // Install dependencies and build the React application
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image using the Dockerfile
                    dockerImage = docker.build("${DOCKER_IMAGE}:${env.BUILD_NUMBER}")
                }
            }
        }

        stage('Push Docker Image to Local Registry') {
            steps {
                script {
                    // Push the Docker image to your local Docker registry
                    dockerImage.push("${env.BUILD_NUMBER}")
                    dockerImage.push('latest')
                }
            }
        }

        stage('Clean Up') {
            steps {
                script {
                    // Remove the Docker image from the Jenkins server to save space
                    sh "docker rmi ${DOCKER_IMAGE}:${env.BUILD_NUMBER}"
                }
            }
        }
    }
}
