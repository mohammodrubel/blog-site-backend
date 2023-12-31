
export type T_blog = {
    title:string;
    author:string;
    date:string;
    content:string;
    tags:'blogging' | 'writing' | 'personal' | 'Unknown';
    image:string;
    comments:[]
}