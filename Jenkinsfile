pipeline {
  agent any
  tools{
  node 'NodeJS 16.13.2'
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
