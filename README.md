# ygo

## Continuous Integration and Deployment

### CodeBuild

**Building a docker image**

1. Logging into ECR with your docker client
```
  $(aws ecr get-login --no-include-email --region ap-southeast-2)
```

2. Building the docker image
```
  docker build . -t 365091202577.dkr.ecr.ap-southeast-2.amazonaws.com/ygo:latest
```

3. Pushing the image to the ECR repo
```
  docker push 365091202577.dkr.ecr.ap-southeast-2.amazonaws.com/ygo:latest
```
