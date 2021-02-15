export function loadErrorResult() {
    setLoading(1);
    let resultBase = document.getElementById("result__base");
    resultBase.parentNode.style.display = 'none';
            console.log('Não encotrou!')
            let notFound = `<div id="error" style="display: flex; max-width: 530px; padding: 15px 45px; background: rgba(255,255,255, .15);
            border-radius: 30px;
            margin: 55px auto 0 auto;
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

export function loadResult(result) {
    console.log(result)
    setLoading(1);
    let resultBase = document.getElementById("result__base");
    resultBase.parentNode.style.display = 'none';
    const resultValue = `
    <div class="result__image">
            <img src=${result[0].avatar_url !== null || result[0].avatar_url !== '' ? result[0].avatar_url : ''} alt="User Avatar" title="User Avatar" />
        </div>
        <div class="result__info">
                <h2>User Info</h2>
                <ul>
                    <li><label>Name:</label> ${result[0].name !== null || result[0].name !== '' ? result[0].name : ''}</li>
                    <li><label>Username:</label> ${result[0].login !== null || result[0].login !== '' ? result[0].login : ''}</li>
                    <li><label>Github URL:</label> <a href=${result[0].html_url !== null || result[0].html_url !== 'null' ? result[0].html_url : ''} target="_blank">
                    ${result[0].html_url}</a></li>
                    <li><label>Location:</label> ${result[0].location !== null || result[0].location !== ' null' ? result[0].location : ''}</li>
                    <li><label>Bio:</label><br />${result[0].bio !== null || result[0].bio !== '' ? result[0].bio : ''}</li>
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

export function LocalstorageRecords(searchValue) {
    var oldItems = JSON.parse(localStorage.getItem('searchHistory')) || [];
    var newItem = {
        'searchitem': searchValue,
        'date': new Date(),
    };

    oldItems.push(newItem);

    localStorage.setItem('searchHistory', JSON.stringify(oldItems));
}