import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware();

// Protected routes will be matched by this matcher e.g. /dashboard
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)"],
};
