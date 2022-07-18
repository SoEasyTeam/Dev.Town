import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TabMenu from '../components/common/TabMenu'
import { TopSearchNav } from '../components/common/TopNav'

export default function SearchPage(){
    const [searchResult, setSearchResult]=useState([])
    const [keyword, setKeyword]=useState([])
    let dispatch = useDispatch()
    let searchUserList  = useSelector(state=>state.search.userList)

    useEffect(
        ()=>{
            if(keyword){
                const searchData = async()=>{
                    const res = await fetch("https://mandarin.api.weniv.co.kr"+keyword,
                        {
                            method: 'GET',
                            headers:{
                                // 'Authrization':,
                                'Content-type':'application/json'
                            }
                        }
                    )
                    const json = await res.json()
                    setSearchResult(json)
                }
                searchData()
            }
        },[keyword]
    )

    return (
        <>
            <TopSearchNav onChange={e=>setKeyword(e.target.value)}/>
            {searchResult.map(user=>{
                return <p key={user.id}>{user.username}</p>
            })}
            if(!searchResult){
                <p>검색결과가 없습니다.</p>
            }
            <TabMenu />
        </>
    )
}