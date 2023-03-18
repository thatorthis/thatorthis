#!/bin/bash -ex

ARGS=$@

poetry install --sync
uvicorn thatorthis.app:app --host 0.0.0.0 --port 8000 $ARGS
