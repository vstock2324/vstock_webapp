import { memo } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import LoggedInUser from "./LoggedInUser";



const NavBarLoginButton = async() => {
    const supabase=await createClient();
    const { data:{user} } = await supabase.auth.getUser();
  return (
    <li>
        {
            user ? (<LoggedInUser name={user.user_metadata["full_name"]} picture_url={user.user_metadata["avatar_url"]} />):(<Link
        className="border border-white  rounded-[25px] px-6 py-1"
        href={"/login"}
      >
        Login
      </Link>)}
    </li>
  );
};

export default memo(NavBarLoginButton);
