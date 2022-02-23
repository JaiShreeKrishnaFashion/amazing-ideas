pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        git(url: 'https://github.com/JaiShreeKrishnaFashion/amazing-ideas.git', branch: 'main')
        bat 'npm install'
        echo 'Build Success'
      }
    }

  }
  tools {
    nodejs 'node'
  }
}