pipeline{
    agent any
   
    environment {
        SERVER_CRE =credentials('sandeepa singh')
    }
    stages{
        stage("build"){
            steps{
             
             
        }
        stage("deploy"){
            steps{
                echo "deploying the application dg"
                echo "deploying with ${SERVER_CRE}"
            }
        }
        post{
            always{

            }
            success{

            }
        }
    }
}