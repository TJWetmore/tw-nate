import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header, Results, DisplayBoard, SearchInput } from './components'
import { getSearchHistory, resetSearchHistory, getUrl } from './services/SearchService'

const App = () =>{

  const [currentSearch, setCurrentSearch] = useState([])
  const [previousSearches, setPreviousSearches] = useState([])

  //isLoading will prevent users from double clicking or double searching while backend is processing
  const [isLoading, setIsLoading] = useState(true)

  //simple error code 
  const [urlError, setURLError] = useState()


  
  const searchURL = async (inputURL, filter) => {
    if (isValidURL(inputURL)){
      setURLError('')
      setIsLoading(true)
      const searchData = await getUrl({url: inputURL, filter: filter});
      setPreviousSearches(searchData.searches)
      setCurrentSearch(searchData.text)
      setIsLoading(false)
      }
      else{setURLError('Please specify an accurate URL and try again')}
  }

  //helper function for validating URL before sending to the backend
  const isValidURL = (inputURL) => {
    var reg = new RegExp('^(?:[a-z]+:)?//', 'i');
    return reg.test(inputURL)
  };

  const clearSearches = async (event) => {
    event.preventDefault();
    setIsLoading(true)
    setPreviousSearches([])
    const clearedSearchHistory = await resetSearchHistory();
    setPreviousSearches(clearedSearchHistory)
    setIsLoading(false)
  }

  const setSearchHistory = async () => {
    const searchHistory = await getSearchHistory();
    setPreviousSearches(searchHistory.searches)
    setIsLoading(false)
  }

  //There is where NextJS could be really great, using GetInitialProps to populate this data before the page load
  useEffect(() => {
    setSearchHistory()
  }, []);


    return (
      <div className="App">
        <Header></Header>
        <div className="container mrgnbtm">
          <div className="row">
            <div className="col-md-6">
                <SearchInput 
                searchURL={searchURL}
                isLoading = {isLoading}
                urlError={urlError}
                  />
            </div>
            <div className="col-md-6">
                <DisplayBoard
                previousSearches={previousSearches}
                clearSearches={clearSearches}
                isLoading = {isLoading}
                searchURL={searchURL}
                />
            </div>
          </div>
        </div>
        <div className="row mrgnbtm">
          <Results 
          currentSearch={currentSearch} 
          isLoading={isLoading}
          />
        </div>
      </div>
    );
  }



export default App;
