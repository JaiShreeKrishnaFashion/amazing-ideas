pipeline {
  agent any
  stages {
    stage('Install Dependencies') {
      steps {
        git(url: 'https://github.com/JaiShreeKrishnaFashion/amazing-ideas.git', branch: 'main')
        bat 'npm install --verbose'
        bat 'rm package-lock.json'
        bat 'npm cache clean --force'
        echo 'Dependencies installed Success'
      }
    }

    stage('Unit Test') {
      steps {
        bat 'npm run coverage'
        echo 'Unit Test Passed'
      }
    }

    stage('Setup Build Directory') {
      steps {
        bat 'mkdir -p build'
        bat 'chmod -R 777 build/'
        echo 'Build Success...'
      }
    }

  }
  tools {
    nodejs 'node'
  }
}