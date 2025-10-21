FROM oven/bun:slim AS build
WORKDIR /app

# Copy dependency files (lockfile is optional)
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Compile Elysia to standalone binary
RUN bun build \
    --compile \
    --minify-whitespace \
    --minify-syntax \
    --target bun-linux-x64 \
    --outfile server \
    ./src/index.ts

# Use minimal distroless base image
FROM gcr.io/distroless/base-debian12 AS runtime

LABEL org.opencontainers.image.source="https://github.com/torresposso/habityco"
LABEL org.opencontainers.image.description="Habit tracking application"
LABEL org.opencontainers.image.licenses="MIT"

WORKDIR /app

# Copy only the compiled binary (includes Bun runtime!)
COPY --from=build /app/server /app/server

ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production

EXPOSE 3000

# Run the standalone binary
CMD ["/app/server"]

