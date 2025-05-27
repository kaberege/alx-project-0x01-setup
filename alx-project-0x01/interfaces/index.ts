/* Types for: 2. Implement Posts Card Components */
export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}

/* Types for: 3. Implement Users Card Components */
export interface UserProps {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    },
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

/* Types for: 4. More Components (Extending Post Page) */
export interface PostData {
    userId: number;
    id?: number;
    title: string;
    body: string;
}

export interface PostModalProps {
    onClose: () => void;
    onSubmit: (post: PostData) => void;
}


/* Types for: 5. Implement the User Modal */
export interface UserData {
    id?: number;
    name: string;
    username: string;
    email: string;
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    lat: string;
    lng: string;
    phone: string;
    website: string;
    companyName: string;
    companyCatchPhrase: string;
    companyBs: string;
}

export interface UserModalProps {
    onClose: () => void;
    onSubmit: (post: UserData) => void;
}

export interface UsersModalProps {
    onClose: () => void;
    onSubmit: (post: UserProps) => void;
}