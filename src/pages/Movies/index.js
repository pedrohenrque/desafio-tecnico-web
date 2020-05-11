import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiX } from 'react-icons/fi';
import moment from 'moment';
import ReactPlayer from 'react-player';

import { apiMovieDetail, key } from '../../services/api';

import {
  Navbar,
  Container,
  Header,
  Title,
  Description,
  Genre,
  Date,
  Details,
  Info,
  InfoTag,
  Rate,
  Tags,
  SubNav,
  Player,
} from './styles';
import Logo from '../../assets/logo.png';
import NoImage from '../../assets/noImage.png';

const Movies = () => {
  const { params } = useRouteMatch();
  console.log(params.id);
  const [repository, setRepository] = useState(null);
  const poster = 'http://image.tmdb.org/t/p/w342/';

  useEffect(() => {
    apiMovieDetail
      .get(
        `${params.id}?api_key=${key}&language=pt-BR&append_to_response=videos`,
      )
      .then((response) => setRepository(response.data));
  }, [params.id]);

  console.log(repository);

  return (
    <>
      <Navbar>
        <h1>Movies</h1>
      </Navbar>
      <SubNav>
        <div>
          <img src={Logo} alt="Cubos" />
          <Link to="/">
            <FiX size={26} />
          </Link>
        </div>
      </SubNav>
      {repository && (
        <Container>
          <div>
            <Header>
              <Title>{repository.title}</Title>
              <Date>
                {moment(repository.release_date).format('DD/MM/YYYY')}
              </Date>
            </Header>
            <Details>
              <Description>
                <h1>Sinopse</h1>
                {repository.overview === '' ? (
                  <h3 style={{ visibility: 'hidden' }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Excepturi quia reprehenderit consectetur dolor quam eum
                    tempora est{' '}
                  </h3>
                ) : (
                  <h3>{repository.overview}</h3>
                )}
                <h1>Informações</h1>
                <Info>
                  <InfoTag>
                    <h2>Situação</h2>
                    {repository.status === 'Released' ? (
                      <p>Lançado</p>
                    ) : (
                      <p>Em desenvolvimento</p>
                    )}
                  </InfoTag>
                  <InfoTag>
                    <h2>Idioma</h2>
                    {repository.original_language === 'en' ? (
                      <p>Inglês</p>
                    ) : 'pt-BR ' ? (
                      <p>Português</p>
                    ) : 'ru' ? (
                      <p>Russo</p>
                    ) : 'ita' ? (
                      <p>Italiano</p>
                    ) : null}
                  </InfoTag>
                  <InfoTag>
                    <h2>Duração</h2>
                    <p>
                      {moment
                        .utc(
                          moment
                            .duration(repository.runtime, 'minutes')
                            .asMilliseconds(),
                        )
                        .format('h:mm')
                        .replace(':', 'h')}
                      min
                    </p>
                  </InfoTag>
                  <InfoTag>
                    <h2>Orçamento</h2>
                    <p>${repository.budget.toLocaleString()},00</p>
                  </InfoTag>
                  <InfoTag>
                    <h2>Receita</h2>
                    <p>${repository.revenue.toLocaleString()},00</p>
                  </InfoTag>
                  <InfoTag>
                    <h2>Lucro</h2>
                    <p>
                      $
                      {(
                        repository.revenue - repository.budget
                      ).toLocaleString()}
                      ,00
                    </p>
                  </InfoTag>
                </Info>
                <Tags>
                  <Genre>
                    {repository.genres.map((g) => (
                      <p key={g.id}>{g.name}</p>
                    ))}
                  </Genre>
                  <Rate>
                    <h6>{repository.vote_average * 10}%</h6>
                  </Rate>
                </Tags>
              </Description>
              {`${poster}${repository.poster_path}` === `${poster}${null}` ? (
                <img src={NoImage} alt="Poster" />
              ) : (
                <img src={`${poster}${repository.poster_path}`} alt="Poster" />
              )}
            </Details>
            {repository?.videos?.results[0]?.key === undefined ? null : (
              <Player>
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${repository.videos.results[0].key}`}
                  width="100%"
                  height="100%"
                />
              </Player>
            )}
          </div>
        </Container>
      )}
    </>
  );
};

export default Movies;
