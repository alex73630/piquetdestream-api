FROM node:18-alpine AS base

RUN apk add --no-cache \
	git \
	ca-certificates \
	python3 make g++

FROM base AS development

# Add user so we don't need --no-sandbox.
RUN addgroup -S nestuser && adduser -S -g nestuser nestuser \
	&& mkdir -p /usr/src/app \
	&& chown -R nestuser:nestuser /usr/src/app

# Run everything after as non-privileged user.
USER nestuser

WORKDIR /usr/src/app

COPY --chown=nestuser:nestuser package*.json ./

RUN npm install

COPY --chown=nestuser:nestuser . .

RUN npm run build

CMD ["npm", "run", "start:dev"]

FROM base as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN apk add --no-cache \
	git \
	ca-certificates

# Add user
RUN addgroup -S nestuser && adduser -S -g nestuser nestuser \
	&& mkdir -p /usr/src/app \
	&& chown -R nestuser:nestuser /usr/src/app

# Run everything after as non-privileged user.
USER nestuser

WORKDIR /usr/src/app

COPY --chown=nestuser:nestuser package*.json ./

RUN npm install --only=production

COPY --chown=nestuser:nestuser . .

COPY --chown=nestuser:nestuser --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]
