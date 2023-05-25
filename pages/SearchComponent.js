'use client'

import { useEffect, useState } from "react";
import utilStyles from "../styles/utils.module.css";
import Link from 'next/link';

export default function SearchComponent({ data }) {
    const [posts, setPosts] = useState(data)
    const [result, setResult] = useState(data)
    const [search, setSearch] = useState("")

    useEffect(() => {
        console.log("search => ", search)
        setResult(() => {
            return posts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()))
        })
    }, [search])
    return (
        <>
            <h1>Search</h1>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
                {result.map(({ id, date, title }) => (
                    <li className={utilStyles.listItem} key={id}>
                        <Link href={`/posts/${id}`}>{title}</Link>
                        <br />
                        <small className={utilStyles.lightText}>
                            <Date dateString={date} />
                        </small>
                    </li>
                ))}
            </ul>
        </>
    )
}