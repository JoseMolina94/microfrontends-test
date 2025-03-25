'use client'

import React, { Suspense } from 'react';

// const UserDetails = React.lazy(() => import('angularApp/UserDetailsComponent'));

export default function Home() {
  return (
    <div>
      <h1>Next.js Host</h1>
      <Suspense fallback={<div>Cargando componente Angular...</div>}>
        {/* <UserDetails /> */}
      </Suspense>
    </div>
  );
}