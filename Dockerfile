# ----------------------------
# 1. Base image
# ----------------------------
FROM oven/bun:1 AS base
WORKDIR /usr/src/app

# ----------------------------
# 2. Dependencies (cached)
# ----------------------------
FROM base AS deps
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# ----------------------------
# 3. Build stage
# ----------------------------
FROM base AS build
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .
RUN bun run build

# ----------------------------
# 4. Production stage
# ----------------------------
FROM oven/bun:1 AS release
WORKDIR /usr/src/app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production --filter=.

COPY --from=build /usr/src/app/dist ./dist

ENV NODE_ENV=production
EXPOSE 3000

ENTRYPOINT ["bun", "run", "start"]
