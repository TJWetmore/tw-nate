import React from 'react'


export const DisplayBoard = ({previousSearches = [], clearSearches, isLoading, searchURL}) => {


const ResulsRow = (previousSearch,index) => (
    <tr key = {index}>
        <td className="col-md-3">{index + 1}</td>
        <td className="col-md-6">{previousSearch}</td>
        <td className="col-md-3"><button onClick={()=>searchURL(previousSearch)}>See Results</button></td>
    </tr>
)

let searchHistoryTable;
previousSearches.length > 0 ? searchHistoryTable = previousSearches.map((search,index) => ResulsRow(search,index)) : searchHistoryTable = null;
return(
        <div className="container">
            <h2>Search History</h2>
            <div className="previousSearches">
                {isLoading 
                ? 
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                :
                <div>
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>Search Number</th>
                            <th style={{width: "50%", overflowX:"wrap",}}>Search</th>
                            <th></th>
                        </tr>
                        </thead>
                    {searchHistoryTable &&
                        <>            
                        <tbody>
                            {searchHistoryTable}
                        </tbody>
                        </>
                    }
                    </table>
                    <div className="btn">
                        <button type="button" onClick={(e) => clearSearches(e)} className="btn btn-warning">Clear Previous Searches</button>
                    </div>
                </div>
                }
            </div>
        </div>
    )
            }