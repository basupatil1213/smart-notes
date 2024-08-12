import { auth } from "@/auth";
import Image from "next/image";
import { UserModel } from "@/types";
import { User } from "next-auth";

export default async function UserAvatar({user} : {user: User | undefined}) {

    return (
        <div>
            <Image
                width={32}
                height={32}
                src={user?.image!}
                alt="User Avatar"
            />
        </div>
    );
}
