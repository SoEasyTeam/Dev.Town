import { useEffect,useState } from 'react'
import { useDispatch } from 'react-redux'
import TabMenu from '../components/common/TabMenu'
import { TopSearchNav } from '../components/common/TopNav'

export default function SearchPage(){
    const [searchResult, setSearchResult]=useState([])
    const [keyword, setKeyword]=useState([])
    let dispatch = useDispatch()

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
            }
        }
    )

    return (
        <>
        <TopSearchNav/>
        <TabMenu />
        </>
    )
}