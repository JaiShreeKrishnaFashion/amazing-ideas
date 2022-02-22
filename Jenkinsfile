pipeline {
  agent any
  stages {
    stage('Install Dependencies') {
      steps {
        echo 'Build Success'
        sh '''rm package-lock.json
npm cache clean --force
npm install --verbose'''
      }
    }

    stage('Unit Test') {
      steps {
        sh 'npm run test'
      }
    }

    stage('Build Directory') {
      steps {
        sh '''mkdir -p build
chmod -R 777 build/'''
      }
    }

  }
  environment {
    node = 'true'
  }
}