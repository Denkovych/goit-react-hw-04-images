export default function fetchImages({ requestValue, secretKey, page }) {
    return fetch(
      `https://pixabay.com/api/?q=${requestValue}&page=${page}&key=${secretKey}&image_type=photo&orientation=horizontal&per_page=12`
    ).then(res => {
      if (!res.ok) {
        throw new Error('Что-то пошло не так...');
      }
      return res.json();
    });
  }