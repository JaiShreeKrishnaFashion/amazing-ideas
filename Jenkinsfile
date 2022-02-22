pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Build Success'
        sh 'npm install'
      }
    }

  }
  environment {
    node = 'true'
  }
}