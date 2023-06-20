pipeline {
    agent any

    tools {nodejs "NodeJS"}

stages {
        stage('install dependecies') { 
            steps {
                sh 'npm ci'
            }
        }
        stage('Cypress run') { 
            steps {
                sh 'npm run allure:clearData'
                sh 'npm run cy:testWithAllureReport'
            }
        }
        stage('Generate Allure report') { 
            steps {
                sh 'npm run allure:generateReport' 
                allure (
                    results: [[allure-results]]
                )
            }
        }
    }
}