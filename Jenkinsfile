pipeline {
  agent any
  stages {
    stage('Install Dependencies') {
      steps {
        echo 'Build Success'
        sh '''rm package-lock.json
'''
        sh '''npm cache clean --force
'''
        sh 'npm install --verbose'
        git(url: 'https://github.com/JaiShreeKrishnaFashion/amazing-ideas.git', branch: 'main')
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
'''
        sh 'chmod -R 777 build/'
      }
    }

  }
  environment {
    node = 'true'
  }
}