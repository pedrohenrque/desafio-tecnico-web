import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { apiPage } from '../../services/api';

import Pagination from '../../components/Pagination'

import {
  Navbar,
  Form,
  Container,
  Header,
  Title,
  Description,
  Genre,
  Date,
  Error,
} from './styles';

import genreList from '../../util/genreList';

import NoImage from '../../assets/noImage.png';

const Dashboard = () => {
  const [newMovie, setNewMovie] = useState('');
  const [inputError, setInputError] = useState('');
  const [resultError, setResultError] = useState('');
  const poster = 'http://image.tmdb.org/t/p/w342/';
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [currentPost, setCurrentPost] = useState()
  const [repositories, setRepositories] = useState(() => {
    const storageRepositories = sessionStorage.getItem('@movie:repositories');

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    }
    return [];
  });

  useEffect(() => {
    sessionStorage.setItem('@movie:repositories', JSON.stringify(repositories));
  }, [repositories]);

  useEffect(() => {
    if (repositories?.results) {
      let indexLastPage = currentPage * 5;
      let indexFirstPage = indexLastPage - 5;
      const currentPosts = repositories.results.slice(indexFirstPage, indexLastPage);
      setCurrentPost(currentPosts)
      console.log(currentPosts);
    }
  }, [currentPage, repositories]);

  async function handleSearch(event) {
    event.preventDefault();
    if (!newMovie) {
      setInputError('Digite o nome de um filme ou gênero');
      return;
    }
    setResultError('');
    setInputError('');
    const replaceMovies = newMovie.replace(' ', '+');

    const { data } = await apiPage.get(`&page=1&query=${replaceMovies}`);

    if (!data.results[0]) {
      setResultError('Não foi encontrado o filme desejado');
    }
    // setTotalPost(data.results.length)
    // let dataPagination = pagination(data.results, page, 5);
    // console.log("data=>", dataPagination);
    // setTotalPages(dataPagination.pages)
  

    setNewMovie('');
    setRepositories(data);

    
    // for (let i = 1; i <= data.total_pages; i++) {
    // const { data } = await apiPage.get(`&page=${i}&query=${replaceMovies}`);
    // console.log("data=>>",data);
    // }
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  
  function searchGenre(value) {
    let search = genreList.map((g) => {
      return value === g.id ? g.name : null;
    });
    return search;
  }

  return (
    <>
      <Navbar>
        <h1>Movies</h1>
      </Navbar>
      <Form error={!!inputError | !!resultError} onSubmit={handleSearch}>
        <input
          value={newMovie}
          onChange={(e) => setNewMovie(e.target.value)}
          placeholder="Busque um filme por nome, ano ou gênero..."
        />
      </Form>
      {resultError && <Error>{resultError}</Error>}
      {inputError && <Error>{inputError}</Error>}
      {currentPost && (
        <Container>
          <div>
            {currentPost.map((repo) => (
              <Link key={repo.id} to={`/movies${repo.id}`}>
                {`${poster}${repo.poster_path}` === `${poster}${null}` ? (
                  <img src={NoImage} alt="Poster" />
                ) : (
                  <img src={`${poster}${repo.poster_path}`} alt="Poster" />
                )}
                <div>
                  <Header>
                    <div>
                      <p>{repo.vote_average * 10}%</p>
                    </div>
                    <Title>{repo.title || repo.name}</Title>
                  </Header>
                  <Date>{moment(repo.release_date).format('DD/MM/YYYY')}</Date>
                  <Description>
                    {repo.overview === '' ? (
                      <h3 style={{ visibility: 'hidden' }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Excepturi quia reprehenderit consectetur dolor
                        quam eum tempora est{' '}
                      </h3>
                    ) : (
                      <h3>{repo.overview}</h3>
                    )}
                    <Genre>
                      {repo.genre_ids.map((e, index) => (
                        <p key={index}>{searchGenre(e)}</p>
                      ))}
                    </Genre>
                  </Description>
                </div>
              </Link>
            ))}
           {currentPost && (
            <Pagination  postPerPage={5} totalPosts={repositories.results.length} paginate={paginate} />
          )}
          </div>
        </Container>
      )}
      
    </>
  );
};

export default Dashboard;
