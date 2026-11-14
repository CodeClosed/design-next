interface RateLimitEntry {
  timestamps: number[];
}

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const store = new Map<string, RateLimitEntry>();

export interface RateLimitCheckResult {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds?: number;
}

export function checkRateLimit(
  identifier: string,
  maxRequests = Number(process.env.RATE_LIMIT_MAX_REQUESTS || 15)
): RateLimitCheckResult {
  const limit = Number.isFinite(maxRequests) && maxRequests > 0 ? maxRequests : 15;
  const now = Date.now();
  const windowStart = now - WINDOW_MS;

  const entry = store.get(identifier) ?? { timestamps: [] };
  entry.timestamps = entry.timestamps.filter((ts) => ts > windowStart);

  if (entry.timestamps.length >= limit) {
    const oldestInWindow = entry.timestamps[0] ?? now;
    const retryAfterSeconds = Math.max(1, Math.ceil((oldestInWindow + WINDOW_MS - now) / 1000));
    store.set(identifier, entry);
    return {
      allowed: false,
      remaining: 0,
      retryAfterSeconds,
    };
  }

  entry.timestamps.push(now);
  store.set(identifier, entry);
  return {
    allowed: true,
    remaining: Math.max(0, limit - entry.timestamps.length),
  };
}

export function resetRateLimitStore(): void {
  store.clear();
}
