pipeline {
  agent any
  tools{
  nodejs 'node'
  }
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
