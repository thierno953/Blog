import React from "react";
import { HiOutlineCamera } from "react-icons/hi";

import { stables } from "../constants";

const ProfilePicture = ({ avatar }) => {
  return (
    <div className="flex items-center w-full gap-x-4">
      <div className="relative w-20 h-20 overflow-hidden rounded-full outline outline-offset-2 outline-1 lutline-primary">
        <label
          htmlFor="profilePicture"
          className="absolute inset-0 bg-transparent rounded-full cursor-pointer"
        >
          {!avatar ? (
            <img
              src={stables.UPLOAD_FOLDER_BASE_URL + avatar}
              alt="profile"
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-blue-50/50">
              <HiOutlineCamera className="h-auto w-7 text-primary" />
            </div>
          )}
        </label>
        <input type="file" className="sr-only" id="profilePicture" />
      </div>
      <button
        type="button"
        className="px-4 py-2 text-red-500 border border-red-500 rounded-lg"
      >
        Delete
      </button>
    </div>
  );
};

export default ProfilePicture;
