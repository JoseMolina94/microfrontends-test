'use client'

import React, { lazy, useState } from 'react';

//const UserDetails = lazy(() => import('angularApp/UserDetailsModule'))

export default function Home() {
  const [user, setUser] = useState({
    name: 'John Doe',
    avatar: 'https://via.placeholder.com/150',
  });

  return (
    <div>
      <h1>Next.js Host</h1>
      {/* <UserDetails user={user} /> */}
    </div>
  );
}