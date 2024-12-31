import { auth } from '@/auth';
import React from 'react';
import NoSession from './no-session';
import Link from 'next/link';

const Profilebar = async () => {
  const session = await auth();
  if (!session) return <NoSession />;

  const userEmail = session.user?.email;
  const userImage = session.user?.image || '/default-profile.png'; // Fallback image
  const userName = session.user?.name || 'Update Now';
  const userBio = session.user?.bio || 'No bio available. Update your profile!';

  return (
    <div className="sticky top-20 px-4 py-8">
      <div className="pt-6">
        <div className="flex flex-col items-center text-center">
          <Link
            href={`/profile/${userEmail}`}
            className="flex flex-col items-center justify-center"
          >
            {/* User Avatar */}
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={userImage} alt="profile image" />
              </div>
            </div>
            {/* User Info */}
            <div className="mt-4 space-y-1">
              <h3 className="font-semibold text-lg">
                {userName === 'Update Now' ? (
                  <Link
                    href={`/profile/${userEmail}/edit`}
                    className="text-primary hover:underline"
                  >
                    Update Now
                  </Link>
                ) : (
                  userName
                )}
              </h3>
              <p className="text-sm text-muted-foreground">{userBio}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profilebar;
