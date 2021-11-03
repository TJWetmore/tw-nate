
export async function resetSearchHistory() {
    const response = await fetch('/api/searches/clear');
    return await response.json();
}

export async function getSearchHistory() {
    const response = await fetch('/api/searches');
    return await response.json();
}

export async function getUrl(searchObject) {
    const response = await fetch(`/api/search`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({search: searchObject.url, filter : searchObject.filter})
      })
    return await response.json();
}
