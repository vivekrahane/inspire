export interface AuthorDetails{
    author:string;
    birthday:Date;
    birthPlace:string
    books:book[];
}

export interface book{
    imageUrl:string;
    title:string;
    purchaseLink:string;
    PublishDate:string;
}