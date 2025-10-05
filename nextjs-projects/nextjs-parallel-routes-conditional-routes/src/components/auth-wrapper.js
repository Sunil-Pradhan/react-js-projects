'use client';

import { auth } from '@/lib/auth';

export default function AuthWrapper({
  authSlot,
  dashboardSlot,
}) {
  return (
    <>
      {auth.isAuthenticated ? dashboardSlot : authSlot}
    </>
  );
}
