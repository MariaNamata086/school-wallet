import React from 'react';
import SharedNavBar from '../components/shared/SharedNavBar';

function OtherPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SharedNavBar />
      <div>{children}</div>
    </div>
  );
}

export default OtherPagesLayout;
