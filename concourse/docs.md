To get concourse running on docker

1. make sure docker is running
2. run `yarn concourse-docker` at the root folder

To set the pipeline with new changes

1. cd into concourse/pipelines
2. run `fly -t simple-mock-app set-pipeline -p pipeline -c pipeline.yaml -l ../credentials.yaml`
