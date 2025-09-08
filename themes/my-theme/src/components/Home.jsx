import React from 'react';

export default function Home() {
  return (
    <div>
      <h1>Marie's Custom EverShop Store</h1>
      <p>Built for GitOps at {new Date().toLocaleString()}</p>
    </div>
  );
}