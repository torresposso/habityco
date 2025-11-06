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
# 3. Build the app
# ----------------------------
FROM base AS build
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
RUN bun run build

# ----------------------------
# 4. Production image (lean)
# ----------------------------
FROM oven/bun:1 AS release
WORKDIR /usr/src/app

# Install only production deps (excludes devDependencies)
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production --filter=.

# Copy built app
COPY --from=build /usr/src/app/dist ./dist

# Environment and port (Railway will respect EXPOSE)
ENV NODE_ENV=production
EXPOSE 3000

# Railway automatically starts the app with CMD/ENTRYPOINT
ENTRYPOINT ["bun", "run", "start"]
