import React, { useEffect } from 'react'
import { HistoryWrapper } from './styles/HistoryWrapper'

export default function History() {

    useEffect(() => {
        const userSearchData = JSON.parse(localStorage.getItem('searchHistory'))
        LoadData(userSearchData)
    }, [])

    function LoadData(userSearchData) {
        let data = ''
        if(userSearchData == null){
            data += 'Search items not found!'
        } else {
            const sorted = userSearchData.sort(function(a, b) {
                return b.timestamp - a.timestamp;
            });
            sorted.map((tags, index) =>{
                data += `<li key=${index}>`;
                data += `<a href=/?q=${tags.searchitem}>${tags.searchitem}</a>`;
                data += `</li>`
            })
        }
        document.getElementById('history__data').innerHTML = data
    }

    return (
            <HistoryWrapper>
                <div className="history__title">
                    <h2>Last searched usernames</h2>
                </div>    
                <div id="history__data"></div>
            </HistoryWrapper>
    )
}
