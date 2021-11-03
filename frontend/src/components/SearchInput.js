import React, {useState} from 'react';


export const SearchInput = ({searchURL, urlError, isLoading}) => {
    const [inputURL, setInputURL] = useState();
    const [filter, setFilter] = useState();

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <h2>Search </h2>
                <form onSubmit= {() => searchURL(inputURL, filter)}>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label >Enter URL of a large text document</label>
                            <input type="text" onChange={(e) => setInputURL(e.target.value)}  className="form-control" name="inputUrl" id="inputUrl" placeholder="https://" />
                            {urlError && <p className='error-text'>{urlError}</p>}
                        </div>
                    </div>
                    {isLoading 
                    ? 
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    :
                    <>
                        <button type="button" onClick= {() => searchURL(inputURL, filter)} className="btn btn-danger">Search</button>
                    </>
                    }
                    <br/>
                    <br/>

                    <h3>Sort Results</h3>
                        <form onChange={(e)=>setFilter(e.target.value)}>
                            <label htmlFor="natural"> 
                                <input type="radio" id="natural" name="filter" value="Natural" defaultChecked="checked"/>
                            &nbsp; As Ordered On Page &nbsp;
                            </label>
                            <label htmlFor="Ascending">
                                <input type="radio" id="Ascending" name="filter" value="Ascending" />
                            &nbsp; Ascending Frequency&nbsp;
                            </label>
                            <label htmlFor="Descending">
                                <input type="radio" id="javascript" name="filter" value="Descending" />
                            &nbsp; Descending Frequency &nbsp;
                            </label>
                            <label htmlFor="Alphabetical"> 
                                <input type="radio" id="Alphabetical" name="filter" value="Alphabetical" />
                            &nbsp; Alphabetically &nbsp;
                            </label>

                        </form>
                </form>
                </div>
            </div>
        </div>
    )
}