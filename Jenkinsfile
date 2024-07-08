pipeline {
  agent { dockerfile true }
  environment {
    GIT_REPO_URL = 'https://github.com/tsega19/JenkinsTest.git'
  }
  stages {
    stage('Checkout') {
      steps {
        checkout([$class: 'GitSCM', branches: [[name: '*/main']],
          doGenerateSubmoduleConfigurations: false, extensions: [],
          submoduleCfg: [], userRemoteConfigs: [[url: "${GIT_REPO_URL}"]]])
      }
    }
    stage('Test') {
      steps {
        sh '''
          node --version
          git --version
          curl --version
        '''
      }
    }
  }
}
