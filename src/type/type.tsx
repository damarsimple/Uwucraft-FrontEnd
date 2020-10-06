export interface User {
    id: number;
    username: string;
    email: string;
    usercart: Usercart[];
    friends: Friend[];
    created_at: string;
    updated_at: string;
}
export interface Search {
    name: string;
    action: string;
    img: string;
    data: string;
    type: string;
}
export interface Friend {
    user: User;
    friend: User;
    created_at: string;
    updated_at: string;
}
export interface Usercart {
    amount: number;
    item?: Item;
    item_id: string;
    updated_at: string;
    created_at: string;
}
export interface Item {
    id: number;
    author: Author;
    item_name: string;
    description: string;
    price: number;
    type: string;
    counter: number;
    view: number;
    minecraft_item_shorthand: string;
    review?: Array<Review>;
}
export interface Review {
    id: number;
    author: Author;
    item: Item;
    score: number;
    content?: string;
    caption: string;
    updated_at: string;
    created_at: string;
}
export interface Author extends User {}
export type Posts = Post[];
export type Items = Item[];
export interface PaginatorInfo {
    count?: number;
    currentPage: number;
    firstItem?: number;
    hasMorePages: boolean;
    lastItem?: number;
    lastPage?: number;
    perPage?: number;
    total: number;
}
export interface Post {
    author: Author;
    caption: string;
    content: string;
    comments: Array<Comment>;
    reactions: Array<Reaction>;
    commentsCount: number;
    reactionsCount: number;
    created_at: string;
    updated_at: string;
}
export interface Comment {
    author: Author;
    post: Post;
    content: string;
}
export interface Reaction {
    author: Author;
    post: Post;
    content: string;
}

export interface SystemStatus {
    ping: number;
    online: boolean;
    exception?: string | null;
    updated_at: string;
}
export interface SPIGOTStatus extends SystemStatus {}
export interface MYSQLStatus extends SystemStatus {}
export interface REDISStatus extends SystemStatus {}

export interface ISimpleLineCharts {
    labels: string[];
    datasets: Dataset[];
}

export interface Dataset {
    label: string;
    fill: boolean;
    lineTension: number;
    backgroundColor: string;
    borderColor: string;
    borderCapStyle: string;
    borderDash: any[];
    borderDashOffset: number;
    borderJoinStyle: string;
    pointBorderColor: string;
    pointBackgroundColor: string;
    pointBorderWidth: number;
    pointHoverRadius: number;
    pointHoverBackgroundColor: string;
    pointHoverBorderColor: string;
    pointHoverBorderWidth: number;
    pointRadius: number;
    pointHitRadius: number;
    data: number[];
}

export interface ChatMessage {
    id: number;
    from: User;
    to: User;
    message: String;
}
