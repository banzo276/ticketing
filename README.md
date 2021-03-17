# Ticketing microservices application with Docker and Kubernetes

## Build Docker images for each service

Run `docker build -t <repo>/<name> .` in terminal (directory with Dockerfile)

## Push Docker images for each service

Run `docker push <repo>/<name>` in terminal

## Install ingress-nginx

https://kubernetes.github.io/ingress-nginx/deploy/

## Apply configuration for Kubernetes (not needed when using skaffold)

Change directory to /infra/k8s and run `kubectl apply -f .` in terminal

## Add entry to host file (needed for ingress-nginx)
127.0.0.1 ticketing.dev

## Install skaffold
https://skaffold.dev/docs/install/

## Generete secret for JWT
`kubectl create secret generic jwt-secret --from-literal=JWT_KEY=<value>`