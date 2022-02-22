pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        git(url: 'https://github.com/JaiShreeKrishnaFashion/amazing-ideas.git', branch: 'main')
        sh 'npm install'
        echo 'Build Success'
      }
    }

  }
}