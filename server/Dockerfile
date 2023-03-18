FROM python:3.11-slim as base
RUN apt-get update && apt-get install --no-install-recommends -y build-essential
ENV PYTHONHASHSEED=random \
    PIP_NO_CACHE_DIR=off \
    PIP_DISABLE_PIP_VERSION_CHECK=on \
    PYTHONUNBUFFERED=1 \
    PYTHONPATH=$PYTHONPATH:. \
    POETRY_VIRTUALENVS_IN_PROJECT=false \
    POETRY_VIRTUALENVS_CREATE=false \
    POETRY_NO_INTERACTION=1 \
    POETRY_HOME=$HOME/.poetry \
    POETRY_VERSION=1.3.2 \
    WORKDIR=/workspace
ENV PATH="$POETRY_HOME/bin:$PATH"
WORKDIR $WORKDIR
EXPOSE 8000

FROM base as poetry
RUN apt-get install --no-install-recommends -y curl 
RUN curl -sSL https://install.python-poetry.org | python3 -

FROM base as dev
# Skip package installation because we are going to use docker-compose
COPY --from=poetry $POETRY_HOME $POETRY_HOME

FROM base as prod
COPY --from=poetry $POETRY_HOME $POETRY_HOME
COPY ./poetry.lock ./pyproject.toml ./
RUN poetry install --only main
COPY . .
RUN chmod +x scripts/*.sh
CMD ["scripts/run-prod.sh"]