pipeline {
  agent any
//   stages {
//     stage('Install Dependencies') {
//       steps {
//         git(url: 'https://github.com/JaiShreeKrishnaFashion/amazing-ideas.git', branch: 'main')
//         bat 'del package-lock.json'
//         bat 'npm cache clean --force'
//         bat 'npm install --verbose'
//         echo 'Dependencies installed Success'
//       }
//     }

    stage('Unit Test') {
      steps {
        bat 'npm install --global cross-env'
        bat 'npm install --no-bin-links'
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
