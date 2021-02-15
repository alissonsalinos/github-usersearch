import React from 'react';
import { Logo } from '../Logo';
import { BrandTitleWrapper } from './styles/BrandTitleWrapper';

export default function BrandTitle() {
    return (
        <BrandTitleWrapper>
            <a className="brandlogo" href="/">
                <div style={{width: '120px', margin: '5px auto 0 auto'}}>
                <Logo />
                </div>
                <h1 style={{margin: 0, fontSize: '1.4em', fontWeight: 'bold', textAlign: 'center'}}>UserSearch</h1>
            </a>
        </BrandTitleWrapper>
    )
}
