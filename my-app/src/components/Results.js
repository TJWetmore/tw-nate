import React from 'react'

export const Results = ({currentSearch, isLoading}) => {

    const ResultsRow = (inputWord,index) => {

        return(
              <tr key = {index}>
                  <td className="col-md-1">{index + 1}</td>
                  <td className="col-md-2" >{inputWord.word}</td>
                  <td className="col-md-1">{inputWord.count}</td>
              </tr>
          )
    }

    let resultsTableBody;
    currentSearch.length > 0 ? resultsTableBody = currentSearch.map((search,index) => ResultsRow(search,index)) : resultsTableBody = null;

    return(
        <div className="container">
            <h2>Search Results</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Word Number</th>
                    <th >Word</th>
                    <th>Count</th>
                </tr>
                </thead>
                {isLoading 
                ? 
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                :
                <tbody>
                    {resultsTableBody}
                </tbody>
                }
            </table>
        </div>
    )
}