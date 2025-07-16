import { initTRPC } from '@trpc/server';
import { Todo, User } from './db';

/**
 * Initialize tRPC backend context
 * This setup should only occur once per backend instance.
 */
const t = initTRPC.context<{
  db: {
    Todo: typeof Todo;
    User: typeof User;
  };
  userId?: string;
}>().create();

/**
 * Reusable tRPC exports
 * - `router`: To define new routers
 * - `publicProcedure`: For defining procedures without auth guards
 * - `middleware`: For creating custom middleware (e.g., auth, logging)
 */
export const router = t.router;
export const publicProcedure = t.procedure;
export const middleware = t.middleware;
