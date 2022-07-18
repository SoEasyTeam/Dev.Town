function search(keyword){
    return async (dispatch, getState)=>{
        let url = 'https://mandarin.api.weniv.co.kr';

        const reqPath = `/user/searchuser/?keyword=${keyword}`

        console.log('검색 스테이트 출력',getState());

        try {
            let res = await fetch(url+reqPath,{
                method:'GET',
                headers:{
                    "Authorization" : "Bearer {token}",
	                "Content-type" : "application/json"
                }
            })
            const resJson = await res.json()
            console.log(resJson);
        }

    }
}