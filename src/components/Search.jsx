import React, {useState, useEffect} from "react";
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";
import { Link } from "react-router-dom";

import CloseIcon from '@mui/icons-material/Close';

const Search = ({placeholder}) => {

    const [data, setData] = useState([]);

    const getData = async () => {
      const response = await axios.get ("http://localhost:5000/mahesas")
      setData(response.data);
    };
     
    useEffect(() => {
      getData();
    }, []);

    const [filteredData, setFilteredData] = useState([]);
    const [searchEntered, setSearchEntered] = useState([]);
    
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setSearchEntered(searchWord)
        const newFilter = data.filter((value) => {
            return value.nama.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([])
        }
        else {
        setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setSearchEntered("");
    }
    return (
        <div className="flex flex-col ">
            <div className="flex justify-between">
                <input 
                type="text" 
                placeholder={placeholder}
                value={searchEntered} 
                onChange={handleFilter}
                className="h-[30px] text-[15px] pl-4 py-4 rounded-2xl" />
                <div className="h-[30px]  w-full items-center flex px-5 sm:px-1 rounded-2xl bg-black">
                    {filteredData.length === 0 ? <SearchIcon style={{ color: "white" }}/> : <CloseIcon className="cursor-pointer" onClick={clearInput} style={{ color: "white" }}/> }
                    
                </div>
            </div>
            {filteredData.length != 0 && ( 
            <div className="mt-[38px] w-fit h-[80px] bg-white shadow-sm overflow-hidden overflow-y-auto absolute rounded-lg">
                {filteredData.slice(0,10).map((value) => {
                    return (
                    <Link to={`/detail/${value.id}`} target="_blank" >
                         <p className=" w-[170px] pl-4 text-[13px] hover:bg-slate-200">{value.nama}</p>
                    </Link>
                    );
                })}
            </div> )
            }

        </div>
    );
}

export default Search;
