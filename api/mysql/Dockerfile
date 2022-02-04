FROM mysql:8.0.16

COPY ./schema.sql /docker-entrypoint-initdb.d/001-schema.sql
COPY ./seed.sql /docker-entrypoint-initdb.d/002-seed.sql
