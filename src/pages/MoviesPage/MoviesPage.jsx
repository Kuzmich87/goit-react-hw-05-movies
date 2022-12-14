import { toast } from 'react-toastify';
import { MoviesList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/servicesApi';
import { Button, Form, Input } from './MoviesPage.styled';

export default function MoviesPage(params) {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams({});
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const location = useLocation();

  useEffect(() => {
    if (!searchParams.get('query')) {
      return;
    }

    fetchSearchMovies(searchParams)
      .then(result => {
        setMovies(result);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  }, [searchParams]);

  const handlChange = e => {
    setQuery(e.currentTarget.value);
  };

  const handlSubmit = e => {
    e.preventDefault();
    const currentQuery = query.trim();
    if (!currentQuery) {
      return toast.warn('enter a valid request!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setSearchParams({ query: currentQuery });
    setQuery('');
  };

  return (
    <>
      <Form onSubmit={handlSubmit}>
        <Input type="text" value={query} onChange={handlChange}></Input>
        <Button type="submit">Search</Button>
      </Form>
      {movies && <MoviesList movies={movies} location={location} />}
    </>
  );
}
