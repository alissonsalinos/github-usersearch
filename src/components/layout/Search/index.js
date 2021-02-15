import React, { useState, useEffect } from 'react';
import { SearchInfoWrapper } from './styles/SearchInfoWrapper';
import { SearchInfoWrapperNot } from './styles/SearchInfoWrapperNot';
import { SearchWrapper } from './styles/SearchWrapper';
import Axios from 'axios';
import LoadingBar from './styles/Loading';

export default function Search() {

    const result = [];
    const [show, setShow] = useState(0)
    const [searchValue, setSearchValue] = useState();
    const [loading, setLoading] = useState(0)

    useEffect(() => {
        document.getElementById("search").addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.key === 'Enter') {
                document.getElementById("btn_search").click();
            }
            })
            
        const queryString = window.location.search;
        if(queryString.length > 0) {
            const urlParams = new URLSearchParams(queryString);
            const q = urlParams.get('q')
            setSearchValue(q);
            document.getElementById("search").value = q;
            setTimeout(() => {
                document.getElementById("btn_search").click(); 
            }, 300);
            
        }    
    },[])

    const search = async (e) => {
        //e.prevenvDefault();
        if (searchValue !== undefined ) {
            try {
                const searchRes = await Axios.get(`https://api.github.com/users/${searchValue}`)
                setTimeout(() => {
                    result.push(searchRes.data);
                    console.log(result[0].avatar_url);
                    if(document.getElementById('error') !== null) {
                        document.getElementById('error').remove();
                    }
                    setShow(1);
                    loadResult(result);
                }, 10);
            } catch (error) {
                loadErrorResult();
            }
        } else {
            console.log("Campo vazio")
            loadErrorResult();
        } 
    }
    
    function loadErrorResult() {
        setLoading(1);
        let resultBase = document.getElementById("result__base");
        resultBase.parentNode.style.display = 'none';
                console.log('Não encotrou!')
                let notFound = `<div id="error" style="display: flex; max-width: 530px; padding: 15px 45px; background: rgba(255,255,255, .15);
                border-radius: 30px;
                margin: 0px auto 0 auto;
                animation-duration: 1.2s;
                animation-timing-function: cubic-bezier(0, 0.5, 0, 1); 
                animation-fill-mode: both;
                animation-name: slideUp;
                animation-delay: 300ms;" ><div id='result__base' style="width:100%;"><small style="text-align:center; width: 100%">Username not found!</small></div></div>`
                
                setTimeout(() => {
                    setLoading(0);
                    resultBase.parentNode.style.display = 'block';
                    resultBase.parentNode.style.background = 'transparent';
                    resultBase.innerHTML = notFound; 
                }, 500);

    }

    function loadResult(result) {
        console.log(result)
        setLoading(1);
        let resultBase = document.getElementById("result__base");
        resultBase.parentNode.style.display = 'none';
        const resultValue = `
        <div class="result__image">
                <img src=${result[0].avatar_url !== null ? result[0].avatar_url : ''} alt="User Avatar" title="User Avatar" />
            </div>
            <div class="result__info">
                    <h2>User Info</h2>
                    <ul>
                        <li><label>Name:</label> ${result[0].name !== null ? result[0].name : ''}</li>
                        <li><label>Username:</label> ${result[0].login !== null ? result[0].login : ''}</li>
                        <li><label>Github URL:</label> <a href=${result[0].html_url !== null ? result[0].html_url : '' } target="_blank">
                        ${result[0].html_url}</a></li>
                        <li><label>Location:</label> ${result[0].location !== null ? result[0].location : ''}</li>
                        <li><label>Bio:</label><br />${result[0].bio !== null ? result[0].bio : ''}</li>
                    </ul>          
            </div>
        `
        setTimeout(() => {
            setLoading(0);
            resultBase.parentNode.style.display = 'block';
            resultBase.parentNode.style.background = 'rgba(255,255,255, .15)';
            resultBase.innerHTML = resultValue; 
            LocalstorageRecords(result);
        }, 500);
        
    }

    function LocalstorageRecords(result) {
        var oldItems = JSON.parse(localStorage.getItem('searchHistory')) || [];
        var newItem = {
            'searchitem': searchValue,
            'date': new Date(),
            'timestamp': new Date().getTime()
        };

        oldItems.push(newItem);

        localStorage.setItem('searchHistory', JSON.stringify(oldItems));
    }

    

    return (
        <>
        <SearchWrapper>
            <input type="text" id="search" placeholder="Enter a GitHub Username" onChange={(e) => setSearchValue(e.target.value)} />
            <button id="btn_search" onClick={search}>Search Now</button>
            <small style={{display:'block', width: '100%'}}>Ex: alissonsalinos</small>
        </SearchWrapper>
        {loading === 1 && (
            <LoadingBar />
            )}
        { show !== 0 ? (
            
        <SearchInfoWrapper>
            <div id="result__base"></div>
        </SearchInfoWrapper>
            
        ) : (<SearchInfoWrapperNot><div id="result__base"></div></SearchInfoWrapperNot>)
        }
        </>
    )
}
