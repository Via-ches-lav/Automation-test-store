pipeline {
    agent any

stages {
        stage('install dependecies') { 
            steps {
                sh 'npm ci'
            }
        }
        stage('Cypress run') { 
            steps {
                sh 'allure:clearData'
                sh 'cy:testWithAllureReport'
            }
        }
        stage('Generate Allure report') { 
            steps {
                sh 'allure:generateReport' 
                allure (
                    results: [[allure-results]]
                )
            }
        }
    }
}