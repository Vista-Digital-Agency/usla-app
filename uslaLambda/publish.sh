rm index.zip 
cd lambda 
zip ../index.zip –r -X *
cd .. 
aws lambda update-function-code --function-name uslaScoring --zip-file fileb://index.zip