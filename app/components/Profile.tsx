import Image from 'next/image';
import React from 'react';

const Profile = () => {
    return (
        <section className="w-full mx-auto">
            <Image
                src="/images/profile.jpg"
                width={200}
                height={200}
                alt="Profile Picture"
                priority={true}
                className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
            />
        </section>
    );
};

export default Profile;
