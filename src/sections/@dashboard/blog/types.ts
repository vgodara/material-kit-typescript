import React from "react";

type Author = {
    name: string,
    avatarUrl: string
}
type Post = {
    id: string,
    cover: string,
    title: string,
    createdAt: Date,
    view: number,
    comment: number,
    share: number,
    favorite: number,
    author: Author
}

type SortType = 'latest' | 'popular' | 'oldest'

export interface BlogPostProps {
    index: number,
    post: Post
}

export interface BlogPostSortOption {
    label: string
    value: SortType
}

export interface BlogPostSortProps {
    options: BlogPostSortOption[]

    onSort:(event:React.ChangeEvent)=>void
}
export interface BlogPostsSearchProps{
    posts:Post[]
}
