# syntax=docker/dockerfile:1
ARG VOLTO_VERSION
# TODO: Replace with
# FROM plone/frontend-builder:${VOLTO_VERSION}
# when the main image is ready
FROM ghcr.io/kitconcept/frontend-builder:${VOLTO_VERSION} as builder

COPY --chown=node packages/volto-portal-governo /app/packages/volto-portal-governo
COPY --chown=node volto.config.js /app/
COPY --chown=node package.json /app/package.json.temp

RUN --mount=type=cache,id=pnpm,target=/app/.pnpm-store,uid=1000 <<EOT
     python3 -c "import json; data = json.load(open('package.json.temp')); deps = data['dependencies']; data['dependencies'].update(deps); json.dump(data, open('package.json', 'w'), indent=2)"
     rm package.json.temp
     pnpm install && pnpm build:deps
     pnpm build
     pnpm install --prod
EOT

# TODO: Replace with
# FROM plone/frontend-prod-config:${VOLTO_VERSION}
# when the main image is ready
FROM ghcr.io/kitconcept/frontend-prod-config:${VOLTO_VERSION}

LABEL maintainer="Artur Barrionuevo <artur-barrionuevo@procergs.rs.gov.br>" \
      org.label-schema.name="portal-governo-frontend" \
      org.label-schema.description="Portal de Governo frontend image." \
      org.label-schema.vendor="Artur Barrionuevo"

COPY --from=builder /app/ /app/
