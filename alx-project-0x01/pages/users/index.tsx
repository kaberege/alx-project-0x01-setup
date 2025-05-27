import React, { useState } from 'react'
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { UserProps, UserData } from '@/interfaces';
import UserCard from '@/components/common/UserCard';
import UserModal from '@/components/common/UserModal';

const Users: React.FC<UserProps> = ({ posts }) => {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [user, setUser] = useState<UserData | null>(null);

    const hanndleAddUser = (newUser: UserData) => {
        setUser({ ...newUser, id: posts.length + 1 });
    }

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="p-4">
                <div className="flex justify-between">
                    <h1 className=" text-2xl font-semibold">Post Content</h1>
                    <button onClick={() => setModalOpen(true)}
                        className="bg-blue-700 hover:bg-blue-800 transition-colors duration-300 cursor-pointer px-4 py-2 rounded-full text-white">Add Post</button>
                </div>
                <div className="grid grid-cols-3 gap-2 w-full max-w-7xl mx-auto">
                    {
                        posts?.map(({ id, name, username, email, address, phone, website, company }: UserProps, key: number) => (
                            <div key={key}>
                                <UserCard
                                    id={id}
                                    name={name}
                                    username={username}
                                    email={email}
                                    address={address}
                                    phone={phone}
                                    website={website}
                                    company={company} />
                            </div>
                        ))
                    }
                </div>
            </main>
            <Footer />
            {isModalOpen && <UserModal
                onClose={() => setModalOpen(false)}
                onSubmit={hanndleAddUser}
            />}
        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const posts = await response.json()

    return {
        props: {
            posts
        }
    }
}

export default Users;
