/**
 * 
 * @param {dict} params: With keys title, year, imdbId, type and/or plot
 */
export const fetchRequest = async (params) => {
    let url = "http://omdbapi.com/?apikey=5db86775"
    if (params.title){
        url = url + "&t=" + params.title
    }
    if (params.year){
        url = url + "&y=" + params.year
    }
    if (params.imdbId){
        url = url + "&i=" + params.imdbId
    }
    if (params.type){
        url = url + "&type=" + params.type
    }
    if (params.plot){
        url = url + "&plot=" + params.plot
    }
    const response = await fetch(url)
    const result = await response.json()
    return result
}