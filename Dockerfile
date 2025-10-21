FROM oven/bun:slim AS base
WORKDIR /app

# Copy package.json for dependency installation
COPY package.json ./

FROM base AS prod-deps
# Disable transpiler cache for Docker environments
ENV BUN_RUNTIME_TRANSPILER_CACHE_PATH=0
RUN bun install --production

FROM base AS build-deps
ENV BUN_RUNTIME_TRANSPILER_CACHE_PATH=0
RUN bun install

FROM build-deps AS build
COPY . .
RUN bun run build

FROM oven/bun:slim AS runtime

# Add OCI labels
LABEL org.opencontainers.image.source="https://github.com/torresposso/habityco"
LABEL org.opencontainers.image.description="Habit tracking application"
LABEL org.opencontainers.image.licenses="MIT"

# Create non-root user
RUN addgroup --system --gid 1001 bun && \
    adduser --system --uid 1001 bun

# Copy with proper ownership
COPY --from=prod-deps --chown=bun:bun /app/node_modules ./node_modules
COPY --from=build --chown=bun:bun /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production
# Disable transpiler cache in production
ENV BUN_RUNTIME_TRANSPILER_CACHE_PATH=0

EXPOSE 3000

# Add health check (updated for Bun)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD bun -e "require('http').get('http://localhost:4321/', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Switch to non-root user
USER bun

CMD ["bun", "./dist/server/entry.mjs"]
