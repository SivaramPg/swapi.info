FROM oven/bun:1.1.5-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json bun.lockb ./
RUN bun install --ignore-scripts


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN bun run --bun build

# Production image, copy all the files and run next
FROM caddy:2.4.5-alpine AS runner

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=builder --chown=nextjs:nodejs /app/out /srv/

USER nextjs

EXPOSE 80

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]

