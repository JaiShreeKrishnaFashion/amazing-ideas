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
        bat 'git config --global user.email "jaishreekrishna@myoption.in"'
        bat 'git config --global user.name "deepak"'
        bat 'npm run build'
        echo 'Build Success...'
      }
    }

    stage('Deployment') {
      steps {
        bat '.jenkins/workspace/updating-amazing-ideas/build'
        echo 'Application Deployed Successfully!!'
        bat '.jenkins/workspace/updating-amazing-ideas/kill.bat'
      }
    }

  }
  tools {
    nodejs 'node'
  }
}
