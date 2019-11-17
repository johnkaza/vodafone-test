#!/bin/bash
if [[ $1 == "dev" ]];
	then
cat >.env <<EOL
NODE_PATH=./src
REACT_APP_ENV='development'
REACT_APP_API_URL=https://voda-react-assessment.herokuapp.com/

EOL
echo "Development environment created"

elif [[ $1 == "prod" ]];
	then
cat >.env <<EOL
NODE_PATH=./src
REACT_APP_ENV='production'
REACT_APP_API_URL=https://voda-react-assessment.herokuapp.com/

EOL
echo "Production environment created"
fi
