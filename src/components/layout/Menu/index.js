import React from 'react';
import BrandTitle from '../BrandTitle';
import { MenuWrapper } from './styles/MenuWrapper';

export default function Menu() {

    const links = [
        {
            text: "Search an user  ",
            url: "./"
        },
        {
            text: "Your search history",
            url: "/history"
        }
    ]

    return (
    <div>
        <BrandTitle />
        <MenuWrapper>
                    {links.map((link, index) => {
                        return (
                            <li key={index}>
                                <a href={link.url}>
                                    {link.text}
                                </a>
                            </li>
                        )
                    })}
        </MenuWrapper>
    </div>
    )
}