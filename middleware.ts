import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define public routes
// const isPublicRoute = createRouteMatcher([
//   "/api/webhooks/clerk",
// ]);

export default clerkMiddleware();

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
