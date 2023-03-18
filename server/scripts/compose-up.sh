#!/bin/bash -ex

ARGS=$@

# Install pre-commit hooks
pre-commit install
docker compose build
docker compose up $ARGS