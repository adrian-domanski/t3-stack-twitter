import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const CreatePostWizard = () => {
  const { user } = useUser();

  console.log(user);

  if (!user) return null;

  return (
    <div className="flex w-full gap-3">
      <Image
        src={user.profileImageUrl}
        alt="Profile image"
        width={50}
        height={50}
        className="h-14 w-14 rounded-full"
      />
      <input
        type="text"
        placeholder="Type some emojis!"
        className="w-full bg-transparent outline-none"
      />
    </div>
  );
};

export default CreatePostWizard;
