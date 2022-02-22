pipeline {
  agent any
  stages {
    stage('Install Dependencies') {
      steps {
        git(url: 'https://github.com/JaiShreeKrishnaFashion/amazing-ideas.git', branch: 'main')
        sh "npm install --verbose"
        echo "npm install success"
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
