export async function getReviewsAndWines(page = 1, limit = 16) {
    try {
        console.debug("sto per effettuare la retrieve delle reviews");
        const response = await fetch(`http://localhost:3000/review/with-wine?page=${page}&limit=${limit}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Authorization: `Bearer ${user.token}`,
            },
        });

        if (!response.ok) throw new Error('Errore nel recupero delle recensioni');

        const data = await response.json();
        console.log("CICCIO:"+ data);
        return data;

    } catch (error) {
        console.error('Errore nella fetch:', error);
        return [];
    }
}
