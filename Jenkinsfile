
pipeline {
  agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh "npm install"
                sh "npm run build"
            }
        }
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
        stage('Deliver') {
            steps {
                sh 'rm -rf /var/www/jenkins-react-ap'
                echo "${WORKSPACE}/build/"
                sh 'cp -r ${WORKSPACE}/build/ /var/www/jenkins-react-app/'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}
