import React from 'react'
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { UserProps } from '@/interfaces';
import UserCard from '@/components/common/UserCard';

const Users: React.FC<UserProps> = ({ posts }) => {
    return (
        <div>
            <Header />
            <main>
                <div className="flex justify-between">
                    <h1 className=" text-2xl font-semibold">User Content</h1>
                    <button className="bg-blue-700 px-4 py-2 rounded-full text-white">Add Post</button>
                </div>
                <div className="grid grid-cols-3 gap-2 ">
                    {
                        posts.map(({ id, name, username, email, address, phone, website, company }: UserProps, key: number) => (
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
