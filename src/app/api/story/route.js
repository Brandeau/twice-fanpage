/**
 * 
 * @returns {Response} - A JSON response containing the first paragraph of Twice's Wikipedia page
 */
export async function GET() {
    const url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro&explaintext&titles=Twice';

    const res = await fetch(url);
    const data = await res.json()

    return Response.json(data);
      
}