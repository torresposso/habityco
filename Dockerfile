FROM node:22-slim AS base
WORKDIR /app

# By copying only the package.json and package-lock.json here, we ensure that the following `-deps` steps are independent of the source code.
# Therefore, the `-deps` steps will be skipped if only the source code changes.
COPY package.json package-lock.json ./


FROM base AS prod-deps
RUN npm install --omit=dev && npm cache clean --force


FROM base AS build-deps
RUN npm install && npm cache clean --force


FROM build-deps AS build
COPY . .
RUN npm run build


FROM base AS runtime

# Add OCI labels
LABEL org.opencontainers.image.source="https://github.com/torresposso/habityco"
LABEL org.opencontainers.image.description="Habit tracking application built with Astro"
LABEL org.opencontainers.image.licenses="MIT"

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 astro

# Copy with proper ownership
COPY --from=prod-deps --chown=astro:nodejs /app/node_modules ./node_modules
COPY --from=build --chown=astro:nodejs /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=4321
ENV NODE_ENV=production

EXPOSE 4321

# Add health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:4321/', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Switch to non-root user
USER astro

CMD ["node", "./dist/server/entry.mjs"]
