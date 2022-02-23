pipeline {
  agent any
   stages {
    stage('Install Dependencies') {
      steps {
        git(url: 'https://github.com/JaiShreeKrishnaFashion/amazing-ideas.git', branch: 'main')
        bat 'del package-lock.json'
        bat 'npm cache clean --force'
        bat 'npm install --verbose'
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
        bat 'npm run build'
        bat 'npm run deploy'
        echo 'Build Success...'
      }
    }

  }
  tools {
    nodejs 'node'
  }
}
