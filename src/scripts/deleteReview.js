export async function deleteReview(id) {
  try {
    console.debug('Deleting review with ID:', id);

    const response = await fetch(`http://localhost:3000/review/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const text = await response.text(); // per vedere anche eventuali errori HTML

    if (response.ok) {
      console.debug('Review deleted successfully');
    } else {
      console.error('Failed to delete review. Status:', response.status);
      console.error('Response body:', text);
    }
  } catch (error) {
    console.error('Error deleting review:', error);
  }
}
