#!/bin/bash -ex

ARGS=$@

uvicorn thatorthis.app:app --host 0.0.0.0 --port 8000  --no-access-log $ARGS
